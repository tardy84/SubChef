import { db } from './database';
import fs from 'fs';
import path from 'path';

// Read the schema file
const schemaPath = path.resolve(__dirname, 'schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf8');

console.log('Running schema...');
db.exec(schema);
console.log('Schema executed successfully.');

const categories = [
    { name: 'Kho', icon: '🍲' },
    { name: 'Xào', icon: '🍳' },
    { name: 'Canh', icon: '🥣' },
    { name: 'Luộc', icon: '🥬' },
    { name: 'Chiên/Rán', icon: '🍤' },
    { name: 'Cơm', icon: '🍚' },
    { name: 'Lẩu', icon: '🥘' },
    { name: 'Đồ Chay', icon: '🥗' },
];

const insertCategory = db.prepare('INSERT INTO categories (name, icon) VALUES (@name, @icon)');
const insertRecipe = db.prepare(`
    INSERT INTO recipes (name, description, instructions, prep_time, cook_time, difficulty, servings, category_id, image_url, main_ingredient)
    VALUES (@name, @description, @instructions, @prep_time, @cook_time, @difficulty, @servings, @category_id, @image_url, @main_ingredient)
`);
const insertIngredient = db.prepare('INSERT OR IGNORE INTO ingredients (name, default_unit, category) VALUES (@name, @default_unit, @category)');
const getIngredientId = db.prepare('SELECT id FROM ingredients WHERE name = @name');
const insertRecipeIngredient = db.prepare(`
    INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, notes)
    VALUES (@recipe_id, @ingredient_id, @quantity, @unit, @notes)
`);

const recipesData = [
    // --- LỢN (PORK) ---
    {
        name: 'Thịt Kho Tàu',
        main_ingredient: 'Lợn',
        image_url: '/public/images/dishes/thit_kho_tau.png',
        description: 'Món thịt heo kho với nước dừa và trứng vịt, đậm đà lạ miệng, rất đưa cơm.',
        instructions: JSON.stringify([
            'Thịt heo rửa sạch, thái miếng vuông, ướp với hành tỏi băm, nước mắm, đường, tiêu trong 30 phút.',
            'Trứng vịt luộc chín, bóc vỏ.',
            'Thắng đường làm nước màu, cho thịt vào xào săn lại.',
            'Đổ nước dừa tươi vào ngập thịt, đun sôi, hớt bọt.',
            'Cho trứng vào, kho nhỏ lửa khoảng 1-2 tiếng đến khi thịt mềm rệu, nước kho cạn sánh lại.'
        ]),
        prep_time: 30,
        cook_time: 120,
        difficulty: 'Vừa',
        category_name: 'Kho',
        ingredients: [
            { name: 'Thịt ba chỉ', quantity: 500, unit: 'g', cat: 'Thịt' },
            { name: 'Trứng vịt', quantity: 5, unit: 'quả', cat: 'Trứng' },
            { name: 'Nước dừa tươi', quantity: 500, unit: 'ml', cat: 'Đồ uống' },
            { name: 'Nước mắm', quantity: 3, unit: 'muỗng canh', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Sườn Xào Chua Ngọt',
        main_ingredient: 'Lợn',
        image_url: '/public/images/dishes/suon_xao_chua_ngot.png',
        description: 'Miếng sườn thấm đẫm sốt chua ngọt bóng bẩy, đậm vị.',
        instructions: JSON.stringify([
            'Sườn chặt miếng, chần sơ nước sôi.',
            'Pha sốt: mắm, đường, dấm, tương cà.',
            'Chiên sườn vàng đều.',
            'Đổ sốt vào rim sườn đến khi cạn keo.'
        ]),
        prep_time: 15,
        cook_time: 25,
        difficulty: 'Vừa',
        category_name: 'Xào',
        ingredients: [
            { name: 'Sườn non', quantity: 500, unit: 'g', cat: 'Thịt' },
            { name: 'Cà chua', quantity: 1, unit: 'quả', cat: 'Rau củ' },
            { name: 'Hành tím', quantity: 2, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Thịt Ba Chỉ Luộc',
        main_ingredient: 'Lợn',
        image_url: '',
        description: 'Món luộc thanh đạm chấm cùng mắm tôm hoặc nước mắm tỏi ớt.',
        instructions: JSON.stringify([
            'Thịt rửa sạch, luộc với hành tím và chút muối.',
            'Thịt chín vớt ra ngâm nước lạnh cho trắng giòn.',
            'Thái lát mỏng, trình bày ra đĩa.'
        ]),
        prep_time: 10,
        cook_time: 20,
        difficulty: 'Dễ',
        category_name: 'Luộc',
        ingredients: [
            { name: 'Thịt ba chỉ', quantity: 400, unit: 'g', cat: 'Thịt' },
            { name: 'Hành tím', quantity: 2, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Thịt Kho Tiêu',
        main_ingredient: 'Lợn',
        image_url: '',
        description: 'Thịt heo kho khô với rất nhiều tiêu, cay nồng đậm đà.',
        instructions: JSON.stringify([
            'Thịt cắt miếng nhỏ, ướp mắm, đường, màu điều và thật nhiều tiêu.',
            'Kho lửa nhỏ đến khi nước cạn khô hoàn toàn.'
        ]),
        prep_time: 10,
        cook_time: 30,
        difficulty: 'Dễ',
        category_name: 'Kho',
        ingredients: [
            { name: 'Thịt nạc vai', quantity: 300, unit: 'g', cat: 'Thịt' },
            { name: 'Tiêu xay', quantity: 2, unit: 'muỗng cà phê', cat: 'Gia vị' }
        ]
    },

    // --- BÒ (BEEF) ---
    {
        name: 'Bò Xào Cần Tỏi',
        main_ingredient: 'Bò',
        image_url: '/public/images/dishes/bo_luc_lac.png',
        description: 'Thịt bò mềm ngọt xào cùng cần tây và tỏi thơm nức.',
        instructions: JSON.stringify([
            'Bò thái mỏng, ướp tỏi, dầu hào, tiêu.',
            'Cần tây cắt khúc, hành tây bổ múi cau.',
            'Xào bò lửa lớn thật nhanh rồi trút ra.',
            'Xào rau củ rồi cho bò vào đảo lại 30s.'
        ]),
        prep_time: 15,
        cook_time: 5,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Thịt bò', quantity: 300, unit: 'g', cat: 'Thịt' },
            { name: 'Cần tây', quantity: 100, unit: 'g', cat: 'Rau củ' },
            { name: 'Hành tây', quantity: 0.5, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Canh Dưa Bò',
        main_ingredient: 'Bò',
        image_url: '',
        description: 'Vị chua của dưa cải muối kết hợp với gân bò dai giòn.',
        instructions: JSON.stringify([
            'Gân bò ninh mềm.',
            'Xào dưa cải và cà chua.',
            'Nấu cùng nước ninh gân bò tầm 15 phút.'
        ]),
        prep_time: 15,
        cook_time: 45,
        difficulty: 'Vừa',
        category_name: 'Canh',
        ingredients: [
            { name: 'Gân bò', quantity: 300, unit: 'g', cat: 'Thịt' },
            { name: 'Dưa cải muối', quantity: 200, unit: 'g', cat: 'Rau củ' },
            { name: 'Cà chua', quantity: 2, unit: 'quả', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Bò Lúc Lắc',
        main_ingredient: 'Bò',
        image_url: '/public/images/dishes/bo_luc_lac.png',
        description: 'Thịt bò cắt khối vuông, cháy cạnh, ăn kèm khoai tây chiên.',
        instructions: JSON.stringify([
            'Bò cắt khối vuông, ướp tỏi và dầu hào.',
            'Xào lửa cực đại cho bò cháy cạnh bên ngoài nhưng mềm bên trong.',
            'Thêm ớt chuông, hành tây xào cùng.'
        ]),
        prep_time: 20,
        cook_time: 10,
        difficulty: 'Vừa',
        category_name: 'Xào',
        ingredients: [
            { name: 'Thịt bò thăn', quantity: 400, unit: 'g', cat: 'Thịt' },
            { name: 'Ớt chuông', quantity: 100, unit: 'g', cat: 'Rau củ' }
        ]
    },

    // --- GÀ (CHICKEN) ---
    {
        name: 'Gà Rang Gừng',
        main_ingredient: 'Gà',
        image_url: '/public/images/dishes/ga_rang_gung.png',
        description: 'Món ăn giữ ấm bụng, cực kỳ phổ biến trong cơm gia đình miền Bắc.',
        instructions: JSON.stringify([
            'Gà chặt miếng, ướp mắm, muối, đường.',
            'Gừng thái sợi dày.',
            'Rang gà khô nước, cháy cạnh rồi cho gừng vào đảo thơm.'
        ]),
        prep_time: 15,
        cook_time: 20,
        difficulty: 'Dễ',
        category_name: 'Kho',
        ingredients: [
            { name: 'Thịt gà', quantity: 600, unit: 'g', cat: 'Thịt' },
            { name: 'Gừng', quantity: 50, unit: 'g', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Cánh Gà Chiên Nước Mắm',
        main_ingredient: 'Gà',
        image_url: '',
        description: 'Lớp vỏ giòn tan quyện với sốt nước mắm tỏi ớt mặn ngọt.',
        instructions: JSON.stringify([
            'Cánh gà chiên vàng giòn.',
            'Pha sốt nước mắm, đường, tỏi ớt băm.',
            'Đảo cánh gà với sốt đến khi thấm và keo lại.'
        ]),
        prep_time: 15,
        cook_time: 15,
        difficulty: 'Dễ',
        category_name: 'Chiên/Rán',
        ingredients: [
            { name: 'Cánh gà', quantity: 500, unit: 'g', cat: 'Thịt' },
            { name: 'Nước mắm', quantity: 3, unit: 'muỗng canh', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Canh Gà Lá Giang',
        main_ingredient: 'Gà',
        image_url: '',
        description: 'Vị chua thanh đặc trưng của lá giang hòa quyện với thịt gà.',
        instructions: JSON.stringify([
            'Gà xào săn.',
            'Cho nước vào đun sôi.',
            'Vò nát lá giang cho vào canh, nêm gia vị.'
        ]),
        prep_time: 15,
        cook_time: 20,
        difficulty: 'Vừa',
        category_name: 'Canh',
        ingredients: [
            { name: 'Thịt gà', quantity: 500, unit: 'g', cat: 'Thịt' },
            { name: 'Lá giang', quantity: 1, unit: 'bó', cat: 'Rau củ' }
        ]
    },

    // --- CÁ (FISH) ---
    {
        name: 'Cá Lóc Kho Tộ',
        main_ingredient: 'Cá',
        image_url: '',
        description: 'Cá kho trong tộ đất, nước kho kẹo lại béo ngậy.',
        instructions: JSON.stringify([
            'Cá lóc cắt khứa, ướp mắm, đường, màu dừa, tiêu, hành tím băm.',
            'Cho vào tộ, kho lửa nhỏ đến khi nước sệt.'
        ]),
        prep_time: 15,
        cook_time: 30,
        difficulty: 'Vừa',
        category_name: 'Kho',
        ingredients: [
            { name: 'Cá lóc', quantity: 500, unit: 'g', cat: 'Hải sản' },
            { name: 'Mỡ heo (top mỡ)', quantity: 50, unit: 'g', cat: 'Thịt' }
        ]
    },
    {
        name: 'Canh Chua Cá Lóc',
        main_ingredient: 'Cá',
        image_url: '/public/images/dishes/canh_chua.png',
        description: 'Món canh giải nhiệt với đầy đủ bạc hà, đậu bắp, cà chua.',
        instructions: JSON.stringify([
            'Nấu nước me chua.',
            'Cho cá vào nấu chín.',
            'Thêm rau canh chua vào đun sôi lại.'
        ]),
        prep_time: 20,
        cook_time: 15,
        difficulty: 'Khó',
        category_name: 'Canh',
        ingredients: [
            { name: 'Cá lóc', quantity: 400, unit: 'g', cat: 'Hải sản' },
            { name: 'Bạc hà', quantity: 100, unit: 'g', cat: 'Rau củ' },
            { name: 'Đậu bắp', quantity: 100, unit: 'g', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Cá Diêu Hồng Chiên Xù',
        main_ingredient: 'Cá',
        image_url: '',
        description: 'Cá chiên cả con, lớp da giòn rụm bên ngoài, thịt mềm bên trong.',
        instructions: JSON.stringify([
            'Làm sạch cá, khía nhẹ thân cá.',
            'Chiên ngập dầu đến khi vàng giòn.'
        ]),
        prep_time: 10,
        cook_time: 15,
        difficulty: 'Dễ',
        category_name: 'Chiên/Rán',
        ingredients: [
            { name: 'Cá diêu hồng', quantity: 800, unit: 'g', cat: 'Hải sản' }
        ]
    },

    // --- TÔM/CUA (SEAFOOD) ---
    {
        name: 'Tôm Rim Mặn Ngọt',
        main_ingredient: 'Hải sản',
        image_url: '/public/images/dishes/tom_rim_man_ngot.png',
        description: 'Tôm cháy tỏi, vỏ giòn bóng bẩy vị mặn ngọt.',
        instructions: JSON.stringify([
            'Tôm làm sạch, để nguyên vỏ.',
            'Xào tôm với tỏi băm.',
            'Nêm mắm, đường rim đến khi nước sốt bám đều.'
        ]),
        prep_time: 10,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Kho',
        ingredients: [
            { name: 'Tôm tươi', quantity: 300, unit: 'g', cat: 'Hải sản' },
            { name: 'Tỏi', quantity: 1, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Canh Cua Rau Mồng Tơi',
        main_ingredient: 'Hải sản',
        image_url: '',
        description: 'Món canh dân dã giải nhiệt mùa hè cực tốt.',
        instructions: JSON.stringify([
            'Giã cua lấy nước, lọc kỹ.',
            'Nấu nước cua sôi cho gạch nổi lên.',
            'Cho rau mồng tơi và mướp vào nấu chín.'
        ]),
        prep_time: 30,
        cook_time: 10,
        difficulty: 'Vừa',
        category_name: 'Canh',
        ingredients: [
            { name: 'Cua đồng', quantity: 200, unit: 'g', cat: 'Hải sản' },
            { name: 'Rau mồng tơi', quantity: 1, unit: 'bó', cat: 'Rau củ' },
            { name: 'Mướp hương', quantity: 1, unit: 'quả', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Mực Xào Dứa (Thơm)',
        main_ingredient: 'Hải sản',
        image_url: '',
        description: 'Mực giòn ngọt sần sật xào cùng dứa và cần tây.',
        instructions: JSON.stringify([
            'Mực làm sạch, khía vảy rồng.',
            'Xào mực lửa lớn, thêm dứa, hành tây, cần tây.'
        ]),
        prep_time: 15,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Mực tươi', quantity: 400, unit: 'g', cat: 'Hải sản' },
            { name: 'Dứa (Thơm)', quantity: 0.5, unit: 'quả', cat: 'Trái cây' }
        ]
    },

    // --- ĐỒ CHAY / RAU CỦ ---
    {
        name: 'Đậu Hũ Sốt Cà Chua',
        main_ingredient: 'Đậu hũ',
        image_url: '/public/images/dishes/dau_hu_sot_ca_chua.png',
        description: 'Món chay đơn giản nhưng vô cùng bắt cơm.',
        instructions: JSON.stringify([
            'Đậu hũ chiên vàng.',
            'Xào nhừ cà chua nêm mắm muối.',
            'Cho đậu hũ vào rim sốt cà tầm 5 phút.'
        ]),
        prep_time: 5,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Đồ Chay',
        ingredients: [
            { name: 'Đậu hũ', quantity: 4, unit: 'miếng', cat: 'Đậu hũ' },
            { name: 'Cà chua', quantity: 3, unit: 'quả', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Rau Muống Xào Tỏi',
        main_ingredient: 'Rau củ',
        image_url: '/public/images/dishes/rau_muong_xao_toi.png',
        description: 'Món rau quốc dân trong mỗi bữa cơm Việt.',
        instructions: JSON.stringify([
            'Rau muống chần sơ.',
            'Phi tỏi thơm, xào rau lửa lớn thật nhanh.'
        ]),
        prep_time: 10,
        cook_time: 5,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Rau muống', quantity: 1, unit: 'bó', cat: 'Rau củ' },
            { name: 'Tỏi', quantity: 1, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Cải Thìa Xào Nấm Đông Cô',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Món rau cao cấp thường thấy trong các bữa tiệc.',
        instructions: JSON.stringify([
            'Nấm đông cô ngâm nở.',
            'Xào nấm với dầu hào cho thấm.',
            'Cho cải thìa vào xào nhanh tay.'
        ]),
        prep_time: 20,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Cải thìa', quantity: 300, unit: 'g', cat: 'Rau củ' },
            { name: 'Nấm đông cô', quantity: 100, unit: 'g', cat: 'Nấm' }
        ]
    },
    {
        name: 'Canh Rau Ngót Nấu Tôm',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Canh ngọt thanh mát, dễ nấu.',
        instructions: JSON.stringify([
            'Rau ngót tuốt lá, vò sơ.',
            'Tôm giã nhuyễn xào thơm.',
            'Cho nước vào nấu sôi rồi thả rau ngót.'
        ]),
        prep_time: 10,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Canh',
        ingredients: [
            { name: 'Rau ngót', quantity: 1, unit: 'bó', cat: 'Rau củ' },
            { name: 'Tôm tươi', quantity: 100, unit: 'g', cat: 'Hải sản' }
        ]
    },
    
    // --- LẨU ---
    {
        name: 'Lẩu Riêu Cua Bắp Bò',
        main_ingredient: 'Hải sản',
        image_url: '/public/images/dishes/lau_rieu_cua.png',
        description: 'Món lẩu đặc trưng miền Bắc với gạch cua béo ngậy.',
        instructions: JSON.stringify([
            'Nấu nước riêu cua.',
            'Dọn bắp bò, sườn sụn, đậu hũ chiên.',
            'Ăn kèm rau sống, hoa chuối.'
        ]),
        prep_time: 40,
        cook_time: 30,
        difficulty: 'Khó',
        category_name: 'Lẩu',
        ingredients: [
            { name: 'Cua đồng', quantity: 500, unit: 'g', cat: 'Hải sản' },
            { name: 'Bắp bò', quantity: 400, unit: 'g', cat: 'Thịt' }
        ]
    },
    {
        name: 'Lẩu Gà Lá É',
        main_ingredient: 'Gà',
        image_url: '',
        description: 'Đặc sản Đà Lạt với vị thơm nồng của lá é và ớt hiểm.',
        instructions: JSON.stringify([
            'Hầm gà lấy nước dùng thanh ngọt.',
            'Giã ớt hiểm và lá é cho vào nước dùng.',
            'Nhúng lá é tươi và ăn kèm bún.'
        ]),
        prep_time: 20,
        cook_time: 40,
        difficulty: 'Vừa',
        category_name: 'Lẩu',
        ingredients: [
            { name: 'Thịt gà', quantity: 1200, unit: 'g', cat: 'Thịt' },
            { name: 'Lá é', quantity: 200, unit: 'g', cat: 'Rau củ' }
        ]
    }
];

import { moreRecipes } from './moreRecipes';
recipesData.push(...moreRecipes);

const runSeed = db.transaction(() => {
    // Insert categories and map them
    const categoryMap: Record<string, number> = {};
    for (const cat of categories) {
        const result = insertCategory.run(cat);
        categoryMap[cat.name] = result.lastInsertRowid as number;
    }

    // Insert recipes and ingredients
    for (const recipe of recipesData) {
        const categoryId = categoryMap[recipe.category_name];

        const recipeResult = insertRecipe.run({
            name: recipe.name,
            description: recipe.description,
            instructions: recipe.instructions,
            prep_time: recipe.prep_time,
            cook_time: recipe.cook_time,
            difficulty: recipe.difficulty,
            servings: 2,
            category_id: categoryId,
            image_url: recipe.image_url || '',
            main_ingredient: recipe.main_ingredient
        });
        const recipeId = recipeResult.lastInsertRowid as number;

        for (const ing of recipe.ingredients) {
            insertIngredient.run({ name: ing.name, default_unit: ing.unit, category: ing.cat });
            const fetchIngId = getIngredientId.get({ name: ing.name }) as { id: number };
            const ingId = fetchIngId.id;

            insertRecipeIngredient.run({
                recipe_id: recipeId,
                ingredient_id: ingId,
                quantity: ing.quantity,
                unit: ing.unit,
                notes: null
            });
        }
    }
});

runSeed();
console.log('Seed completed gracefully. Inserted many more recipes with main_ingredient classification!');
