export const moreRecipes = [
    // --- LỢN (PORK) ---
    {
        name: 'Thịt Rang Cháy Cạnh',
        main_ingredient: 'Lợn',
        image_url: '',
        description: 'Thịt ba chỉ rang xém cạnh, ngấm đều gia vị mặn ngọt, ăn tốn cơm.',
        instructions: JSON.stringify([
            'Thịt ba chỉ thái mỏng vừa ăn.',
            'Rang thịt với lửa vừa đến khi ra mỡ và cháy cạnh.',
            'Cho hành tím băm vào phi thơm.',
            'Nêm nước mắm, đường, xíu bột ngọt, đảo nhanh tay cho keo lại, rắc hành lá.'
        ]),
        prep_time: 10,
        cook_time: 15,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Thịt ba chỉ', quantity: 300, unit: 'g', cat: 'Thịt' },
            { name: 'Hành tím', quantity: 1, unit: 'củ', cat: 'Rau củ' },
            { name: 'Hành lá', quantity: 2, unit: 'nhánh', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Sườn Rim Mặn Ngọt',
        main_ingredient: 'Lợn',
        image_url: '',
        description: 'Sườn non rim mặn ngọt, màu nâu cánh gián đẹp mắt.',
        instructions: JSON.stringify([
            'Sườn chặt miếng nhỏ, chần sơ nước sôi khử mùi.',
            'Chiên sườn hơi xém vàng.',
            'Pha sốt mắm, đường, tỏi băm, tiêu, chút tương ớt.',
            'Cho sốt vào rim cùng sườn lửa nhỏ đến khi sốt cạn sệt bám vào sườn.'
        ]),
        prep_time: 15,
        cook_time: 30,
        difficulty: 'Vừa',
        category_name: 'Kho',
        ingredients: [
            { name: 'Sườn non', quantity: 400, unit: 'g', cat: 'Thịt' },
            { name: 'Tỏi', quantity: 1, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Thịt Băm Rang Hành',
        main_ingredient: 'Lợn',
        image_url: '',
        description: 'Thịt băm rang xém với hành khô, món ngon siêu nhanh cho ngày bận rộn.',
        instructions: JSON.stringify([
            'Hành khô băm nhỏ.',
            'Phi thơm hành khô với dầu ăn.',
            'Cho thịt băm vào xào tơi.',
            'Nêm nước mắm, tiêu, xíu đường, rang xém vàng.'
        ]),
        prep_time: 5,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Thịt vai băm', quantity: 300, unit: 'g', cat: 'Thịt' },
            { name: 'Hành khô', quantity: 2, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Giò Lụa Kho Tiêu',
        main_ingredient: 'Lợn',
        image_url: '',
        description: 'Giò lụa thái miếng kho keo với nước mắm và hạt tiêu.',
        instructions: JSON.stringify([
            'Giò lụa thái miếng vừa ăn.',
            'Cho giò vào chảo, thêm chút dầu ăn xào sơ.',
            'Nêm nước mắm, xì dầu, đường, nước lọc và nhiều tiêu.',
            'Kho lửa nhỏ đến khi sệt lại.'
        ]),
        prep_time: 5,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Kho',
        ingredients: [
            { name: 'Giò lụa', quantity: 250, unit: 'g', cat: 'Thịt' },
            { name: 'Tiêu hạt', quantity: 1, unit: 'thìa', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Thịt Nướng Bún Chả',
        main_ingredient: 'Lợn',
        image_url: '',
        description: 'Thịt ba chỉ nướng than hoa thơm lừng, ăn kèm bún và nước mắm chua ngọt.',
        instructions: JSON.stringify([
            'Thịt ba chỉ thái mỏng, ướp với nước hàng, mắm, hành tỏi sả băm, dầu hào.',
            'Để ngấm 30 phút rồi đem nướng chín vàng.',
            'Pha nước chấm chua ngọt ăn kèm bún và rau sống.'
        ]),
        prep_time: 30,
        cook_time: 20,
        difficulty: 'Vừa',
        category_name: 'Chiên/Rán',
        ingredients: [
            { name: 'Thịt ba chỉ', quantity: 500, unit: 'g', cat: 'Thịt' },
            { name: 'Sả', quantity: 2, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Móng Giò Hầm Đu Đủ',
        main_ingredient: 'Lợn',
        image_url: '',
        description: 'Canh móng giò hầm đu đủ xanh ngọt thanh, bổ dưỡng.',
        instructions: JSON.stringify([
            'Móng giò chặt miếng, chần sơ nước sôi, rửa sạch.',
            'Hầm móng giò khoảng 45 phút cho mềm.',
            'Đu đủ xanh gọt vỏ, thái miếng vuông.',
            'Cho đu đủ vào hầm thêm 10 phút, nêm nếm gia vị và rắc hành, mùi tàu.'
        ]),
        prep_time: 20,
        cook_time: 60,
        difficulty: 'Vừa',
        category_name: 'Canh',
        ingredients: [
            { name: 'Móng giò', quantity: 1, unit: 'cái', cat: 'Thịt' },
            { name: 'Đu đủ xanh', quantity: 300, unit: 'g', cat: 'Rau củ' }
        ]
    },

    // --- BÒ (BEEF) ---
    {
        name: 'Bò Xào Hành Tây',
        main_ingredient: 'Bò',
        image_url: '',
        description: 'Thịt bò xào nhanh với hành tây ngọt lịm.',
        instructions: JSON.stringify([
            'Thịt bò thái mỏng ướp tỏi, gia vị, dầu ăn.',
            'Hành tây thái múi cau.',
            'Xào nhanh thịt bò lửa lớn, trút ra đĩa.',
            'Xào hành tây vừa chín tới, đổ thịt bò vào đảo đều, tắt bếp.'
        ]),
        prep_time: 10,
        cook_time: 5,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Thịt bò', quantity: 250, unit: 'g', cat: 'Thịt' },
            { name: 'Hành tây', quantity: 1, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Bò Kho Cà Rốt',
        main_ingredient: 'Bò',
        image_url: '',
        description: 'Thịt bò kho mềm rục cùng cà rốt đậm đà vị hoa hồi, quế.',
        instructions: JSON.stringify([
            'Thịt nạm bò cắt khối vuông, ướp bột bò kho, gừng, tỏi.',
            'Xào săn thịt bò, cho nước vào hầm 1 tiếng rưỡi.',
            'Cà rốt cắt khúc, cho vào hầm thêm 20 phút cho mềm.'
        ]),
        prep_time: 20,
        cook_time: 120,
        difficulty: 'Khó',
        category_name: 'Kho',
        ingredients: [
            { name: 'Thịt nậm bò', quantity: 500, unit: 'g', cat: 'Thịt' },
            { name: 'Cà rốt', quantity: 2, unit: 'củ', cat: 'Rau củ' },
            { name: 'Bột bò kho', quantity: 1, unit: 'gói', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Canh Bò Nấu Khế',
        main_ingredient: 'Bò',
        image_url: '',
        description: 'Canh thịt bò băm nấu với khế chua thanh vắt, giải nhiệt.',
        instructions: JSON.stringify([
            'Thịt bò băm nhỏ, ướp hành tiêu.',
            'Khế chua thái lát mỏng hình sao.',
            'Xào sơ thịt bò, cho nước sôi vào, hớt bọt.',
            'Thả khế vào đun sôi 2 phút, nêm gia vị, rắc rau răm, hành lá.'
        ]),
        prep_time: 10,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Canh',
        ingredients: [
            { name: 'Thịt bò băm', quantity: 150, unit: 'g', cat: 'Thịt' },
            { name: 'Khế chua', quantity: 2, unit: 'quả', cat: 'Trái cây' }
        ]
    },
    {
        name: 'Bắp Bò Luộc Chấm Mắm Gừng',
        main_ingredient: 'Bò',
        image_url: '',
        description: 'Bắp bò hoa luộc chín tới, thái mỏng chấm mắm gừng cay nồng.',
        instructions: JSON.stringify([
            'Luộc bắp bò với gừng đập dập và củ sả trong 40 phút.',
            'Vớt ra ngâm nước đá cho giòn.',
            'Thái lát thật mỏng.',
            'Giã gừng, tỏi, ớt pha với nước mắm và đường để làm nước chấm.'
        ]),
        prep_time: 10,
        cook_time: 40,
        difficulty: 'Dễ',
        category_name: 'Luộc',
        ingredients: [
            { name: 'Bắp bò hoa', quantity: 500, unit: 'g', cat: 'Thịt' },
            { name: 'Gừng', quantity: 1, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Bò Xào Súp Lơ',
        main_ingredient: 'Bò',
        image_url: '',
        description: 'Súp lơ xanh giòn xào với thịt bò mềm ngọt giàu dinh dưỡng.',
        instructions: JSON.stringify([
            'Bò thái mỏng ướp tỏi và gia vị.',
            'Súp lơ xanh cắt miếng nhỏ, chần sơ nước sôi.',
            'Xào thịt bò lửa lớn chín tái, trút ra.',
            'Xào súp lơ với tỏi, nêm gia vị, rồi đổ thịt bò vào đảo lại.'
        ]),
        prep_time: 15,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Thịt bò', quantity: 200, unit: 'g', cat: 'Thịt' },
            { name: 'Súp lơ xanh', quantity: 1, unit: 'bông', cat: 'Rau củ' }
        ]
    },

    // --- GÀ (CHICKEN) ---
    {
        name: 'Gà Kho Sả Ớt',
        main_ingredient: 'Gà',
        image_url: '',
        description: 'Gà chặt miếng kho cay nồng vị sả ớt, món đưa cơm miền Nam.',
        instructions: JSON.stringify([
            'Gà chặt miếng, ướp nước mắm, xíu muối, nghệ, bột ngọt.',
            'Sả ớt băm nhỏ phi thơm với dầu ăn.',
            'Cho gà vào xào săn lại.',
            'Đổ ít nước xâm xấp, kho nhỏ lửa đến khi cạn nước, thịt gà săn chắc.'
        ]),
        prep_time: 15,
        cook_time: 25,
        difficulty: 'Vừa',
        category_name: 'Kho',
        ingredients: [
            { name: 'Gà ta', quantity: 600, unit: 'g', cat: 'Thịt' },
            { name: 'Sả', quantity: 3, unit: 'cây', cat: 'Rau củ' },
            { name: 'Ớt tươi', quantity: 2, unit: 'quả', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Gà Luộc Lá Chanh',
        main_ingredient: 'Gà',
        image_url: '',
        description: 'Món gà luộc truyền thống, vàng ươm, thơm mùi lá chanh.',
        instructions: JSON.stringify([
            'Gà làm sạch, xát muối rửa lại.',
            'Cho gà vào nồi nước lạnh, luộc sôi lăn tăn 15 phút, tắt bếp ngâm thêm 15 phút.',
            'Vớt gà ra, chặt miếng vừa ăn.',
            'Lá chanh thái chỉ rắc lên trên, chấm muối tiêu chanh.'
        ]),
        prep_time: 15,
        cook_time: 30,
        difficulty: 'Dễ',
        category_name: 'Luộc',
        ingredients: [
            { name: 'Gà ta nguyên con', quantity: 1, unit: 'con', cat: 'Thịt' },
            { name: 'Lá chanh', quantity: 5, unit: 'lá', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Gà Xào Sả Ớt',
        main_ingredient: 'Gà',
        image_url: '',
        description: 'Thịt gà lọc xương xào nhanh với sả ớt giòn thơm.',
        instructions: JSON.stringify([
            'Gà lọc xương, thái miếng mỏng vừa.',
            'Ướp gà với hành, tỏi, dầu hào.',
            'Phi thơm sả ớt băm.',
            'Xào gà lửa lớn chín tới, thêm chút đường và nước mắm cho vừa miệng.'
        ]),
        prep_time: 15,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Thịt đùi gà rút xương', quantity: 300, unit: 'g', cat: 'Thịt' },
            { name: 'Sả băm', quantity: 3, unit: 'thìa', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Canh Gà Hầm Hạt Sen',
        main_ingredient: 'Gà',
        image_url: '',
        description: 'Canh gà hầm hạt sen táo đỏ bổ dưỡng, an thần.',
        instructions: JSON.stringify([
            'Gà chặt miếng lớn, chần sơ.',
            'Hạt sen tươi rửa sạch.',
            'Cho gà, hạt sen, táo đỏ vào nồi hầm lửa nhỏ khoảng 45 phút.',
            'Nêm chút muối thanh nhẹ.'
        ]),
        prep_time: 10,
        cook_time: 45,
        difficulty: 'Vừa',
        category_name: 'Canh',
        ingredients: [
            { name: 'Thịt gà', quantity: 500, unit: 'g', cat: 'Thịt' },
            { name: 'Hạt sen', quantity: 100, unit: 'g', cat: 'Khác' },
            { name: 'Táo đỏ', quantity: 10, unit: 'quả', cat: 'Khác' }
        ]
    },
    {
        name: 'Đùi Gà Chiên Bơ Tỏi',
        main_ingredient: 'Gà',
        image_url: '',
        description: 'Đùi gà chiên xù giòn tan bọc lớp xót bơ tỏi mặn ngọt.',
        instructions: JSON.stringify([
            'Đùi gà khía thịt, luộc sơ.',
            'Lăn đùi gà qua bột chiên giòn, chiên ngập dầu.',
            'Đun chảy bơ, phi thơm nhiều tỏi, thêm đường và xíu mắm.',
            'Đảo đều đùi gà vào sốt bơ tỏi.'
        ]),
        prep_time: 20,
        cook_time: 20,
        difficulty: 'Khó',
        category_name: 'Chiên/Rán',
        ingredients: [
            { name: 'Đùi gà', quantity: 4, unit: 'cái', cat: 'Thịt' },
            { name: 'Bơ lạt', quantity: 2, unit: 'thìa', cat: 'Khác' },
            { name: 'Tỏi', quantity: 2, unit: 'củ', cat: 'Rau củ' }
        ]
    },

    // --- CÁ (FISH) ---
    {
        name: 'Cá Trắm Kho Riềng',
        main_ingredient: 'Cá',
        image_url: '',
        description: 'Cá trắm kho chắc thịt, thơm lừng vị riềng và nước chè xanh.',
        instructions: JSON.stringify([
            'Cá trắm cắt khúc, ướp muối, mắm, nước hàng.',
            'Riềng thái lát lót dưới đáy nồi, xếp cá lên trên.',
            'Cho thêm ba chỉ lợn cắt miếng, kho lửa nhỏ.',
            'Châm thêm nước chè xanh hoặc nước dừa, kho đến khi cạn nước 2-3 tiếng.'
        ]),
        prep_time: 30,
        cook_time: 180,
        difficulty: 'Khó',
        category_name: 'Kho',
        ingredients: [
            { name: 'Cá trắm', quantity: 1, unit: 'kg', cat: 'Hải sản' },
            { name: 'Riềng', quantity: 1, unit: 'củ', cat: 'Rau củ' },
            { name: 'Thịt ba chỉ', quantity: 200, unit: 'g', cat: 'Thịt' }
        ]
    },
    {
        name: 'Cá Rô Phi Chiên Giòn',
        main_ingredient: 'Cá',
        image_url: '',
        description: 'Cá rô phi chiên giòn móng chấm mắm ngót cay cay.',
        instructions: JSON.stringify([
            'Cá rô phi làm sạch, khía chéo trên thân.',
            'Thấm khô nước trên cá.',
            'Đun nóng nhiều dầu, thả cá vào chiên vàng giòn 2 mặt.',
            'Pha nước mắm tỏi ớt chanh đường để chấm.'
        ]),
        prep_time: 10,
        cook_time: 20,
        difficulty: 'Dễ',
        category_name: 'Chiên/Rán',
        ingredients: [
            { name: 'Cá rô phi', quantity: 1, unit: 'con', cat: 'Hải sản' },
            { name: 'Dầu ăn', quantity: 200, unit: 'ml', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Cá Thu Sốt Cà Chua',
        main_ingredient: 'Cá',
        image_url: '',
        description: 'Cá thu rán sơ rim chua xót ngọt với cà chua.',
        instructions: JSON.stringify([
            'Cá thu cắt khúc, rán vàng xém cạnh.',
            'Xào nhừ cà chua với xíu mắm muối.',
            'Cho cá vào rim cùng nước sốt cà chua, thêm nước mắm đường vừa ăn.',
            'Rắc hành ngò thái nhỏ lên trên.'
        ]),
        prep_time: 15,
        cook_time: 15,
        difficulty: 'Dễ',
        category_name: 'Kho',
        ingredients: [
            { name: 'Cá thu khúc', quantity: 300, unit: 'g', cat: 'Hải sản' },
            { name: 'Cà chua', quantity: 2, unit: 'quả', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Cá Chép Om Dưa',
        main_ingredient: 'Cá',
        image_url: '',
        description: 'Cá chép béo ngậy nấu với dưa cải chua, tóp mỡ.',
        instructions: JSON.stringify([
            'Cá chép làm nguyên con hoặc cắt đôi, chiên sơ cho săn.',
            'Dưa hấu muối xào săn với cà chua và thìa là hành lá.',
            'Cho cá rôi nấu cùng dưa, thêm nước hầm 20-30 phút cho cá mềm thấm vị chua.'
        ]),
        prep_time: 20,
        cook_time: 30,
        difficulty: 'Vừa',
        category_name: 'Canh', // Om similar to canh/kho
        ingredients: [
            { name: 'Cá chép', quantity: 1, unit: 'kg', cat: 'Hải sản' },
            { name: 'Dưa cải chua', quantity: 300, unit: 'g', cat: 'Rau củ' },
            { name: 'Thì là', quantity: 1, unit: 'bó', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Canh Chua Neo Cá Khoai',
        main_ingredient: 'Cá',
        image_url: '',
        description: 'Canh cá khoai mềm tan nấu chua ngọt giải nhiệu cực đã.',
        instructions: JSON.stringify([
            'Cá khoai làm sạch, ướp chút hành mắm.',
            'Nấu sôi nước với cà chua xào, me chua.',
            'Thả cá khoai vào, sôi bùng lại là tắt cá chín.',
            'Cho rau nhút, ngò ôm, ngò gai.'
        ]),
        prep_time: 15,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Canh',
        ingredients: [
            { name: 'Cá khoai', quantity: 500, unit: 'g', cat: 'Hải sản' },
            { name: 'Cà chua', quantity: 2, unit: 'quả', cat: 'Rau củ' }
        ]
    },

    // --- HẢI SẢN (SEAFOOD) ---
    {
        name: 'Tôm Rang Thịt Ba Chỉ',
        main_ingredient: 'Hải sản',
        image_url: '',
        description: 'Tôm đất nhỏ rang cùng thịt ba chỉ mỏng xém cạnh, mặn ngọt đậm đà.',
        instructions: JSON.stringify([
            'Thịt ba chỉ thái hạt lựu hoặc con chỉ nhỏ, rang cháy cạnh ra mỡ.',
            'Tôm rửa sạch cắt râu để nguyên vỏ.',
            'Cho tôm vào đảo cùng thịt, nêm nước mắm, đường, xíu bột ngọt.',
            'Rang đến khi tôm đổi màu đỏ bóng bẩy, thịt heo xém lại.'
        ]),
        prep_time: 15,
        cook_time: 15,
        difficulty: 'Dễ',
        category_name: 'Kho',
        ingredients: [
            { name: 'Tôm đất', quantity: 200, unit: 'g', cat: 'Hải sản' },
            { name: 'Thịt ba chỉ', quantity: 150, unit: 'g', cat: 'Thịt' }
        ]
    },
    {
        name: 'Mực Hấp Hành Gừng',
        main_ingredient: 'Hải sản',
        image_url: '',
        description: 'Mực ống nguyên con hấp giữ trọn vị ngọt biển.',
        instructions: JSON.stringify([
            'Mực làm sạch, khía nhẹ.',
            'Xếp gừng thái sợi, hành lá cắt khúc lên đĩa.',
            'Cho mực lên đĩa, hấp cách thủy khoảng 7-10 phút.',
            'Ăn kèm nước mắm gừng chua ngọt.'
        ]),
        prep_time: 10,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Luộc',
        ingredients: [
            { name: 'Mực ống', quantity: 400, unit: 'g', cat: 'Hải sản' },
            { name: 'Gừng', quantity: 1, unit: 'củ', cat: 'Rau củ' },
            { name: 'Hành lá', quantity: 5, unit: 'cây', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Cua Rang Me',
        main_ingredient: 'Hải sản',
        image_url: '',
        description: 'Cua nguyên con chiên giòn sốt me mặn ngọt chua chua rạo rực.',
        instructions: JSON.stringify([
            'Cua làm sạch, chia làm 2 hoặc 4 phần.',
            'Áo cua qua bột năng mỏng, chiên ngập dầu cho chín đỏ trứng áo.',
            'Lọc nước cốt me, pha với đường, nước mắm chấm.',
            'Xào sốt me sệt lại rồi xốc cua vào thật đều tay.'
        ]),
        prep_time: 20,
        cook_time: 20,
        difficulty: 'Khó',
        category_name: 'Xào',
        ingredients: [
            { name: 'Cua biển', quantity: 800, unit: 'g', cat: 'Hải sản' },
            { name: 'Me cục', quantity: 50, unit: 'g', cat: 'Khác' }
        ]
    },
    {
        name: 'Nghêu Hấp Sả',
        main_ingredient: 'Hải sản',
        image_url: '',
        description: 'Nghêu hấp nhanh ngọt nước, cay nồng vị sả ớt siêu hấp dẫn.',
        instructions: JSON.stringify([
            'Nghêu ngâm nước vo gạo và ớt để nhả bùn dơ.',
            'Đập dập củ sả lót nồi, cho nghêu lên trên.',
            'Cho vào xíu nước cạn, chút đường bột nêm.',
            'Hấp 3-5 phút đến khi toàn bộ nghêu mở miệng là xong.'
        ]),
        prep_time: 60,
        cook_time: 5,
        difficulty: 'Dễ',
        category_name: 'Luộc',
        ingredients: [
            { name: 'Nghêu', quantity: 1, unit: 'kg', cat: 'Hải sản' },
            { name: 'Sả', quantity: 5, unit: 'cây', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Tôm Nhúng Dấm',
        main_ingredient: 'Hải sản',
        image_url: '',
        description: 'Món nhậu nhanh gọn với tôm sống nhúng qua dấm và lá giang.',
        instructions: JSON.stringify([
            'Tôm rửa sạch bóc múi.',
            'Pha nước dấm, nước cốt dừa, gừng, sả thái lác đun sôi nổi.',
            'Nhúng tôm tại bàn ăn trực tiếp cùng rau sống, bún.'
        ]),
        prep_time: 15,
        cook_time: 15,
        difficulty: 'Vừa',
        category_name: 'Lẩu',
        ingredients: [
            { name: 'Tôm lột', quantity: 400, unit: 'g', cat: 'Hải sản' },
            { name: 'Dấm', quantity: 4, unit: 'thìa', cat: 'Gia vị' }
        ]
    },

    // --- ĐẬU HŨ / ĐỒ CHAY (TOFU / VEGAN) ---
    {
        name: 'Đậu Hũ Chiên Sả Ớt',
        main_ingredient: 'Đậu hũ',
        image_url: '',
        description: 'Đậu hũ non chiên giòn áo lớp xả ớt mằn mặn.',
        instructions: JSON.stringify([
            'Đậu hũ cắt miếng vuông, chiên vàng giòn các mặt.',
            'Băm nhuyễn sả và ớt.',
            'Phi sả ớt với chút dầu, nêm mắm hoặc xì dầu, bột ngọt.',
            'Cho đậu đã chiên vào đảo qua lại cho thấm sả ớt.'
        ]),
        prep_time: 10,
        cook_time: 15,
        difficulty: 'Dễ',
        category_name: 'Chiên/Rán',
        ingredients: [
            { name: 'Đậu hũ', quantity: 4, unit: 'miếng', cat: 'Đậu hũ' },
            { name: 'Sả băm', quantity: 2, unit: 'thìa', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Đậu Hũ Tứ Xuyên',
        main_ingredient: 'Đậu hũ',
        image_url: '',
        description: 'Đậu non mềm mịn trong sốt sa tế cay nồng (Bản gốc cay, có thể bỏ mặn).',
        instructions: JSON.stringify([
            'Đậu non luộc sơ với muối để khỏi vỡ.',
            'Xào xíu thịt băm (hoặc nấm băm nếu thuần chay) với sa tế, tỏi gừng.',
            'Xì dầu, đường đổ vào tạo sốt, cho đậu non vào rim 5 phút.',
            'Hòa bột năng đổ mỏng vào cho sánh lại.'
        ]),
        prep_time: 15,
        cook_time: 15,
        difficulty: 'Vừa',
        category_name: 'Xào',
        ingredients: [
            { name: 'Đậu hũ non', quantity: 2, unit: 'hộp', cat: 'Đậu hũ' },
            { name: 'Sa tế', quantity: 1, unit: 'thìa', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Nấm Đùi Gà Kho Tiêu',
        main_ingredient: 'Đậu hũ',
        image_url: '',
        description: 'Nấm đùi gà dai giòn sần sật kho tiêu đậm đà thay thế thịt.',
        instructions: JSON.stringify([
            'Nấm đùi gà thái hạt lựu lớn hoặc thái lát.',
            'Phi thơm củ hành ba rô.',
            'Cho nấm vào xào săn lại, nêm xì dầu, đường, hắc xì dầu để lấy màu.',
            'Cho nhiều hạt tiêu đập dập, kho lửa cạn đến khi sệt nước keo lại.'
        ]),
        prep_time: 10,
        cook_time: 20,
        difficulty: 'Dễ',
        category_name: 'Kho',
        ingredients: [
            { name: 'Nấm đùi gà', quantity: 300, unit: 'g', cat: 'Nấm' },
            { name: 'Xì dầu', quantity: 3, unit: 'thìa', cat: 'Gia vị' },
            { name: 'Tiêu', quantity: 1, unit: 'thìa', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Canh Rong Biển Đậu Hũ',
        main_ingredient: 'Đậu hũ',
        image_url: '',
        description: 'Canh rong biển đậu non thanh mát, giải nhiệt cho mùa hè.',
        instructions: JSON.stringify([
            'Rong biển khô ngâm nở ròi xào xơ với dầu mé.',
            'Đổ nước vào nấu sôi lên, nêm xíu hạt nêm.',
            'Cho đậu non thái nhỏ vào.',
            'Sôi lại thì tắt bếp ngay tránh nát đậu ron.'
        ]),
        prep_time: 5,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Canh',
        ingredients: [
            { name: 'Rong biển khô', quantity: 10, unit: 'g', cat: 'Khác' },
            { name: 'Đậu hũ non', quantity: 1, unit: 'hộp', cat: 'Đậu hũ' }
        ]
    },
    {
        name: 'Đậu Hũ Nhồi Thịt Sốt Cà',
        main_ingredient: 'Đậu hũ',
        image_url: '',
        description: 'Miếng đậu hũ chiên béo nhồi bên trong nhân thịt mộc nhĩ, sốt đậm đà (Non-vegan).',
        instructions: JSON.stringify([
            'Đậu hũ chiên xẻ bụng, móc bớt ruột.',
            'Nhồi thịt băm, mộc nhĩ, hành khô vào.',
            'Chiên áp chảo mặt cắt để thịt cố định.',
            'Rim chung với sốt cà chua mắm muối 10 phút.'
        ]),
        prep_time: 30,
        cook_time: 20,
        difficulty: 'Khó',
        category_name: 'Kho',
        ingredients: [
            { name: 'Đậu hũ chiên', quantity: 5, unit: 'miếng', cat: 'Đậu hũ' },
            { name: 'Thịt băm', quantity: 150, unit: 'g', cat: 'Thịt' }
        ]
    },
    {
        name: 'Miến Xào Chay',
        main_ingredient: 'Đậu hũ',
        image_url: '',
        description: 'Miến xào dai tơi với mộc nhĩ, nấm đông cô, cà rốt, cải thìa.',
        instructions: JSON.stringify([
            'Ngâm mềm miến dong và cắt khúc. Ngâm nấm, mộc nhĩ.',
            'Xào chín riêng rau củ, nấm với xì dầu rồi cho ra tô.',
            'Xào miến cho tơi chín, không dính chảo.',
            'Đổ rau củ vào trộn đều cùng cần tây.'
        ]),
        prep_time: 20,
        cook_time: 15,
        difficulty: 'Vừa',
        category_name: 'Xào',
        ingredients: [
            { name: 'Miến dong', quantity: 200, unit: 'g', cat: 'Khác' },
            { name: 'Cà rốt', quantity: 1, unit: 'củ', cat: 'Rau củ' }
        ]
    },

    // --- RAU CỦ (VEGETABLES) ---
    {
        name: 'Bắp Cải Xào Tỏi',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Rau bắp cải thái nhỏ xào nhanh với dầu và tỏi đập dập.',
        instructions: JSON.stringify([
            'Bắp cải xắt sợi nhỏ rửa sạch, để ráo thật khô nước.',
            'Tỏi đập nhuyễn phi xém cạnh.',
            'Cho bắp cải vào đảo siêu tốc lửa lớn, nếm dầu hào.',
            'Đảo chừng 1 tới 2 phút là chín vừa giòn không bị nát nhũng.'
        ]),
        prep_time: 10,
        cook_time: 5,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Bắp cải', quantity: 0.5, unit: 'Cái', cat: 'Rau củ' },
            { name: 'Tỏi', quantity: 1, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Canh Bí Xanh Nấu Tôm Băm',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Canh bí đao ngọt lịm với tôm tươi băm giã nát.',
        instructions: JSON.stringify([
            'Tôm bóc vỏ, băm nhuyễn với xíu muối hạt tiêu.',
            'Bí đao thái con chì hoặc nạo sợi.',
            'Viên thịt tôm thả vào xào sơ hoặc thả vào nước dùng hầm sôi.',
            'Bỏ bí vào, thêm bọt vớt ra, nêm vừa ăn, rắc hành ngò thái vụn.'
        ]),
        prep_time: 15,
        cook_time: 15,
        difficulty: 'Dễ',
        category_name: 'Canh',
        ingredients: [
            { name: 'Bí xanh', quantity: 500, unit: 'g', cat: 'Rau củ' },
            { name: 'Tôm tươi', quantity: 100, unit: 'g', cat: 'Hải sản' }
        ]
    },
    {
        name: 'Trứng Cà Chua (Canh Đám Mây)',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Món ăn siêu cơ bản với váng trứng cà chua, cực kỳ dễ ăn.',
        instructions: JSON.stringify([
            'Phi hành khô xào mềm cà chua.',
            'Cho nước đủ dùng vào nấu sôi.',
            'Đánh tan 2 quả trứng gà, nhỏ từ trên từ từ xuống nước đang sôi để tạo tia trứng.',
            'Rắc nhiều hành mùi.'
        ]),
        prep_time: 5,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Canh',
        ingredients: [
            { name: 'Trứng gà', quantity: 2, unit: 'quả', cat: 'Trứng' },
            { name: 'Cà chua', quantity: 2, unit: 'quả', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Lặc Lè (Mướp Trâu) Luộc',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Món luộc giòn sần sật ngọt thanh, chấm vừng lạc.',
        instructions: JSON.stringify([
            'Lặc lè để nguyên quả, cắt 2 đầu.',
            'Nước sôi cho nhúm muối, thả vào luộc 10 phút.',
            'Vớt ra bổ đôi hoặc cắt miếng xéo.',
            'Chấm với muối vừng phộng.'
        ]),
        prep_time: 5,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Luộc',
        ingredients: [
            { name: 'Mướp lặc lè', quantity: 500, unit: 'g', cat: 'Rau củ' },
            { name: 'Muối vừng', quantity: 2, unit: 'thìa', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Đậu Cô Ve Xào Thịt',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Rau cô ve tước xơ xào chung với thịt lợn thái vụn.',
        instructions: JSON.stringify([
            'Thịt thăn heo thái miếng dài mỏng ướp tỏi mắm.',
            'Cô xe bẻ 2 đầu rút chỉ 2 sống lưng, thái vát xéo hạt lựu.',
            'Xào chín thịt trút ra.',
            'Xào đậu cô ve chín giòn, rồi mới cho thịt đè lên.'
        ]),
        prep_time: 15,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Đậu cô ve', quantity: 300, unit: 'g', cat: 'Rau củ' },
            { name: 'Thịt heo', quantity: 150, unit: 'g', cat: 'Thịt' }
        ]
    },
    {
        name: 'Súp Lơ Luộc Chấm Kho Quẹt',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Rau củ quả thập cẩm luộc chấm mắm kho quẹt tóp mỡ cay mặn.',
        instructions: JSON.stringify([
            'Tóp mỡ chiên giòn, thịt ba chỉ thái hạt lựu, tôm khô ngâm nở.',
            'Rim tất cả với mắm, đường, dầu điều, tiêu tỏi ớt ra niêu đất sệt kẹo cứng lại.',
            'Súp lơ, cà rốt, bầu bí luộc chín vừa tới vớt ra đĩa.'
        ]),
        prep_time: 20,
        cook_time: 20,
        difficulty: 'Vừa',
        category_name: 'Luộc',
        ingredients: [
            { name: 'Rau củ các loại', quantity: 500, unit: 'g', cat: 'Rau củ' },
            { name: 'Tóp mỡ, tôm khô', quantity: 100, unit: 'g', cat: 'Thịt' }
        ]
    },
    {
        name: 'Rau Muống Xào Chao',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Rau muống xào tỏi béo ngậy vị chao đỏ miền Tây.',
        instructions: JSON.stringify([
            'Hòa tan 2-3 viên chao với chút đường và xíu nước.',
            'Rau muống nhặt sạch, chần sơ nếu muốn rau siêu xanh.',
            'Phi tỏi đập dập, cho nhúng chao vào phi thơm.',
            'Trút rau muống vào đảo lửa siêu to thật lẹ tay, trộn đều sốt chao.'
        ]),
        prep_time: 10,
        cook_time: 5,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Rau muống', quantity: 1, unit: 'mớ', cat: 'Rau củ' },
            { name: 'Chao đỏ', quantity: 3, unit: 'viên', cat: 'Gia vị' },
            { name: 'Tỏi', quantity: 1, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Canh Mướp Đắng Nhồi Thịt',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Mướp đắng thanh mát giải ngán, nước canh ngọt bùi vị thịt heo băm.',
        instructions: JSON.stringify([
            'Mướp đắng cắt khúc vừa ăn, moi sạch ruột.',
            'Trộn thịt băm, mộc nhĩ, nấm hương, tiêu xíu mắm, nhồi chặt vào khúc mướp.',
            'Đun sôi nồi nước xương hoặc nước dùng, thả mướp đắng vào.',
            'Hầm nhỏ lửa 30 phút cho mướp đắng thật mềm rệu.'
        ]),
        prep_time: 20,
        cook_time: 30,
        difficulty: 'Vừa',
        category_name: 'Canh',
        ingredients: [
            { name: 'Mướp đắng (Khổ qua)', quantity: 3, unit: 'quả', cat: 'Rau củ' },
            { name: 'Thịt băm', quantity: 300, unit: 'g', cat: 'Thịt' },
            { name: 'Mộc nhĩ', quantity: 3, unit: 'tai', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Su Su Xào Trứng',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Su su bào sợi mỏng xào nhanh với trứng đánh tơi, món quen của mọi gia đình.',
        instructions: JSON.stringify([
            'Su su gọt vỏ bao tay (tránh nhựa), bào sợi nhỏ.',
            'Phi thơm củ hành, cho su su vào đảo nhanh vừa mềm tới.',
            'Đập 2 quả trứng gà rưới đều lên mặt su su.',
            'Dùng đũa đảo liên tục để trứng chín tơi vụn quấn quanh sợi.'
        ]),
        prep_time: 15,
        cook_time: 7,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Su su', quantity: 2, unit: 'quả', cat: 'Rau củ' },
            { name: 'Trứng gà', quantity: 2, unit: 'quả', cat: 'Trứng' }
        ]
    },
    {
        name: 'Cải Thìa Xào Nấm Đông Cô',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Cải chíp (cải thìa) xanh mướt, ăn kèm nấm đông cô ngọt lịm từ sốt dầu hào.',
        instructions: JSON.stringify([
            'Nấm đông cô ngâm nở thật mềm, luộc sơ vắt ráo nước.',
            'Cải thìa rửa sạch, chần nước sôi xíu muối để giữ xanh.',
            'Phi tỏi xào nấm với dầu hào, xì dầu, sệt lại.',
            'Xếp cải ra đĩa, đổ sốt nấm lên trên trải đều.'
        ]),
        prep_time: 20,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Cải thìa', quantity: 500, unit: 'g', cat: 'Rau củ' },
            { name: 'Nấm đông cô', quantity: 10, unit: 'tai', cat: 'Nấm' },
            { name: 'Dầu hào', quantity: 2, unit: 'thìa', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Bầu Xào Tỏi',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Bầu thái hạt lựu lớn hoặc thái chỉ xào mướt với rất nhiều tỏi tươi đập nhuyễn.',
        instructions: JSON.stringify([
            'Bầu gọt mỏng vỏ, bỏ ruột nếu già, thái miếng nhỏ.',
            'Phi tỏi thật nóng và hơi xém, thêm bầu vào.',
            'Thêm xíu hạt nêm mắm tôm, xào lửa lớn để bầu không bị ra rục nước.',
            'Rắc tí tiêu đen xay nhuyễn bốc mùi thơm lừng.'
        ]),
        prep_time: 10,
        cook_time: 5,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Bầu', quantity: 1, unit: 'quả', cat: 'Rau củ' },
            { name: 'Tỏi', quantity: 2, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Canh Chua Rau Muống Tép',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Rau muống vặn tay nấu me chua thanh, kết hợp tép đồng đỏ au.',
        instructions: JSON.stringify([
            'Tép đồng cắt râu, rang sơ với chút muối, dầu ăn.',
            'Cho nước lọc vào đun, dầm vắt me chua.',
            'Nước sôi thả tép, ngắt rau muống thả vào, nêm đường nước mắm chua ngọt.',
            'Sôi lại thêm ngò ôm, ngò gai thái nhỏ ngay tắp lự.'
        ]),
        prep_time: 15,
        cook_time: 15,
        difficulty: 'Vừa',
        category_name: 'Canh',
        ingredients: [
            { name: 'Rau muống', quantity: 1, unit: 'mớ', cat: 'Rau củ' },
            { name: 'Tép đồng', quantity: 100, unit: 'g', cat: 'Hải sản' },
            { name: 'Me chua', quantity: 50, unit: 'g', cat: 'Khác' }
        ]
    }
];
