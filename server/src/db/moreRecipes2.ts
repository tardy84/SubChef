export const moreRecipes2 = [
    // --- LỢN (PORK) ---
    {
        name: 'Chả Lụa Chiên Trứng',
        main_ingredient: 'Lợn',
        image_url: '',
        description: 'Chả lụa thái lát chiên vàng với trứng, đơn giản mà thơm ngon.',
        instructions: JSON.stringify([
            'Chả lụa thái lát dày vừa.',
            'Đánh trứng, nêm chút muối tiêu.',
            'Chiên chả lụa vàng hai mặt, đổ trứng vào xung quanh.',
            'Gập lại hoặc để nguyên, chiên chín vàng.'
        ]),
        prep_time: 5,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Chiên/Rán',
        ingredients: [
            { name: 'Chả lụa', quantity: 200, unit: 'g', cat: 'Thịt' },
            { name: 'Trứng gà', quantity: 3, unit: 'quả', cat: 'Trứng' },
            { name: 'Dầu ăn', quantity: 2, unit: 'muỗng canh', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Thịt Heo Quay Giòn Bì',
        main_ingredient: 'Lợn',
        image_url: '',
        description: 'Thịt heo quay bì giòn rụm, thịt mềm thơm, chấm mắm chua ngọt.',
        instructions: JSON.stringify([
            'Thịt ba chỉ luộc sơ, để ráo.',
            'Dùng dĩa đâm lỗ phần bì thật nhiều.',
            'Thoa muối và dấm lên bì, để khô 30 phút.',
            'Nướng lò 220°C mặt bì lên trên 30-40 phút đến khi bì phồng giòn.'
        ]),
        prep_time: 40,
        cook_time: 40,
        difficulty: 'Khó',
        category_name: 'Chiên/Rán',
        ingredients: [
            { name: 'Thịt ba chỉ', quantity: 600, unit: 'g', cat: 'Thịt' },
            { name: 'Muối', quantity: 1, unit: 'muỗng cà phê', cat: 'Gia vị' },
            { name: 'Dấm', quantity: 1, unit: 'muỗng canh', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Canh Sườn Nấu Bắp',
        main_ingredient: 'Lợn',
        image_url: '',
        description: 'Canh sườn ngọt tự nhiên với bắp mỹ, thanh mát cho bữa cơm.',
        instructions: JSON.stringify([
            'Sườn chặt miếng, chần sơ nước sôi.',
            'Bắp chặt khúc, cà rốt thái miếng.',
            'Nấu sườn với nước lạnh, hớt bọt cho trong nước.',
            'Cho bắp và cà rốt vào nấu đến mềm, nêm muối, hạt nêm.'
        ]),
        prep_time: 10,
        cook_time: 45,
        difficulty: 'Dễ',
        category_name: 'Canh',
        ingredients: [
            { name: 'Sườn non', quantity: 400, unit: 'g', cat: 'Thịt' },
            { name: 'Bắp mỹ', quantity: 2, unit: 'trái', cat: 'Rau củ' },
            { name: 'Cà rốt', quantity: 1, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    // --- BÒ (BEEF) ---
    {
        name: 'Bò Nướng Lá Lốt',
        main_ingredient: 'Bò',
        image_url: '',
        description: 'Thịt bò băm cuộn lá lốt nướng than, thơm nức mũi, chấm mắm me.',
        instructions: JSON.stringify([
            'Thịt bò băm trộn với sả, tỏi, hành, nước mắm, đường, tiêu.',
            'Lá lốt rửa sạch, lau khô.',
            'Cuộn thịt vào lá lốt, xiên que.',
            'Nướng than hoặc chảo đến chín thơm.'
        ]),
        prep_time: 20,
        cook_time: 15,
        difficulty: 'Vừa',
        category_name: 'Xào',
        ingredients: [
            { name: 'Thịt bò băm', quantity: 300, unit: 'g', cat: 'Thịt' },
            { name: 'Lá lốt', quantity: 30, unit: 'lá', cat: 'Rau củ' },
            { name: 'Sả', quantity: 2, unit: 'cây', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Phở Bò',
        main_ingredient: 'Bò',
        image_url: '',
        description: 'Tô phở bò chuẩn vị với nước dùng trong, thịt tái chín đủ loại.',
        instructions: JSON.stringify([
            'Hầm xương bò với gừng nướng, hành nướng 4-6 tiếng.',
            'Nêm nước mắm, muối, đường phèn, hoa hồi, quế.',
            'Bánh phở trần qua nước sôi.',
            'Chan nước dùng nóng, bày thịt bò tái, chín lên trên.'
        ]),
        prep_time: 30,
        cook_time: 360,
        difficulty: 'Khó',
        category_name: 'Canh',
        ingredients: [
            { name: 'Xương bò', quantity: 1000, unit: 'g', cat: 'Thịt' },
            { name: 'Thịt bò', quantity: 300, unit: 'g', cat: 'Thịt' },
            { name: 'Bánh phở', quantity: 400, unit: 'g', cat: 'Tinh bột' },
            { name: 'Gừng', quantity: 1, unit: 'củ', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Bò Xào Rau Cần',
        main_ingredient: 'Bò',
        image_url: '',
        description: 'Thịt bò mềm xào cùng rau cần thơm giòn, hương vị đặc trưng.',
        instructions: JSON.stringify([
            'Thịt bò thái mỏng, ướp tỏi, nước mắm, dầu hào, bột ngô.',
            'Rau cần cắt khúc.',
            'Xào bò lửa lớn vừa chín tới.',
            'Cho rau cần vào xào nhanh, nêm lại gia vị.'
        ]),
        prep_time: 15,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Thịt bò', quantity: 250, unit: 'g', cat: 'Thịt' },
            { name: 'Rau cần', quantity: 300, unit: 'g', cat: 'Rau củ' },
            { name: 'Tỏi', quantity: 3, unit: 'tép', cat: 'Gia vị' }
        ]
    },
    // --- GÀ (CHICKEN) ---
    {
        name: 'Gà Nướng Mật Ong',
        main_ingredient: 'Gà',
        image_url: '',
        description: 'Gà nướng bóng đẹp với lớp mật ong caramen, thơm ngọt hấp dẫn.',
        instructions: JSON.stringify([
            'Gà ướp mật ong, nước mắm, tỏi, gừng, tiêu ít nhất 2 tiếng.',
            'Nướng lò 200°C 40 phút, lật đều.',
            'Phết thêm mật ong lên mặt gà, nướng thêm 10 phút đến vàng bóng.'
        ]),
        prep_time: 120,
        cook_time: 50,
        difficulty: 'Vừa',
        category_name: 'Chiên/Rán',
        ingredients: [
            { name: 'Gà nguyên con', quantity: 1200, unit: 'g', cat: 'Thịt' },
            { name: 'Mật ong', quantity: 3, unit: 'muỗng canh', cat: 'Gia vị' },
            { name: 'Gừng', quantity: 1, unit: 'nhánh', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Miến Gà',
        main_ingredient: 'Gà',
        image_url: '',
        description: 'Tô miến gà thanh nhẹ với nước dùng ngọt, miến dai mịn.',
        instructions: JSON.stringify([
            'Luộc gà với hành, gừng, nêm muối, hạt nêm.',
            'Xé gà thành sợi nhỏ.',
            'Miến ngâm mềm, trần qua nước sôi.',
            'Chan nước dùng nóng, bày gà xé lên trên, rắc hành lá, tiêu.'
        ]),
        prep_time: 15,
        cook_time: 40,
        difficulty: 'Dễ',
        category_name: 'Canh',
        ingredients: [
            { name: 'Thịt gà', quantity: 500, unit: 'g', cat: 'Thịt' },
            { name: 'Miến dong', quantity: 200, unit: 'g', cat: 'Tinh bột' },
            { name: 'Hành lá', quantity: 3, unit: 'nhánh', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Gà Xào Nấm',
        main_ingredient: 'Gà',
        image_url: '',
        description: 'Thịt gà mềm ngọt xào cùng các loại nấm thơm béo.',
        instructions: JSON.stringify([
            'Thịt gà thái miếng, ướp nước mắm, tỏi, tiêu.',
            'Nấm ngâm nở (nấm khô) hoặc rửa sạch (nấm tươi).',
            'Xào gà chín, cho nấm vào xào cùng.',
            'Nêm dầu hào, nước mắm, hạt nêm cho vừa miệng.'
        ]),
        prep_time: 15,
        cook_time: 15,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Thịt gà', quantity: 300, unit: 'g', cat: 'Thịt' },
            { name: 'Nấm hương', quantity: 150, unit: 'g', cat: 'Rau củ' },
            { name: 'Nấm rơm', quantity: 150, unit: 'g', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Trứng Chiên Hành Lá',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Trứng chiên vàng xốp với hành lá thơm, món ăn nhanh cơ bản.',
        instructions: JSON.stringify([
            'Đánh trứng với hành lá cắt nhỏ, nêm muối tiêu.',
            'Làm nóng chảo với dầu ăn.',
            'Đổ trứng vào, lắc chảo cho trứng xốp đều.',
            'Chiên chín vàng hai mặt.'
        ]),
        prep_time: 5,
        cook_time: 5,
        difficulty: 'Dễ',
        category_name: 'Chiên/Rán',
        ingredients: [
            { name: 'Trứng gà', quantity: 3, unit: 'quả', cat: 'Trứng' },
            { name: 'Hành lá', quantity: 3, unit: 'nhánh', cat: 'Rau củ' },
            { name: 'Dầu ăn', quantity: 2, unit: 'muỗng canh', cat: 'Gia vị' }
        ]
    },
    // --- CÁ (FISH) ---
    {
        name: 'Cá Basa Chiên Bơ Tỏi',
        main_ingredient: 'Cá',
        image_url: '',
        description: 'Phi lê cá basa chiên giòn áo bơ tỏi béo thơm.',
        instructions: JSON.stringify([
            'Cá basa ướp muối, tiêu, bột tỏi.',
            'Chiên cá vàng hai mặt.',
            'Cho bơ và tỏi băm vào chảo, đảo nhanh.',
            'Rưới hỗn hợp bơ tỏi lên cá, rắc rau mùi.'
        ]),
        prep_time: 10,
        cook_time: 15,
        difficulty: 'Dễ',
        category_name: 'Chiên/Rán',
        ingredients: [
            { name: 'Cá basa', quantity: 400, unit: 'g', cat: 'Cá' },
            { name: 'Bơ', quantity: 30, unit: 'g', cat: 'Gia vị' },
            { name: 'Tỏi', quantity: 4, unit: 'tép', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Canh Cải Nấu Cá',
        main_ingredient: 'Cá',
        image_url: '',
        description: 'Canh cải xanh nấu cùng cá, thanh mát và bổ dưỡng.',
        instructions: JSON.stringify([
            'Cá thái khúc, ướp muối gừng.',
            'Chiên sơ cá vàng.',
            'Nấu nước sôi, cho cá vào nấu 10 phút.',
            'Cho cải vào nấu đến héo, nêm muối hạt nêm.'
        ]),
        prep_time: 10,
        cook_time: 20,
        difficulty: 'Dễ',
        category_name: 'Canh',
        ingredients: [
            { name: 'Cá diêu hồng', quantity: 400, unit: 'g', cat: 'Cá' },
            { name: 'Cải ngọt', quantity: 300, unit: 'g', cat: 'Rau củ' },
            { name: 'Gừng', quantity: 1, unit: 'nhánh', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Cá Hồi Áp Chảo',
        main_ingredient: 'Cá',
        image_url: '',
        description: 'Phi lê cá hồi áp chảo vàng đẹp, bên trong mềm ngọt.',
        instructions: JSON.stringify([
            'Cá hồi thấm khô, nêm muối tiêu.',
            'Làm nóng chảo với dầu ô liu ở lửa vừa cao.',
            'Áp cá mặt da xuống 3-4 phút đến giòn vàng.',
            'Lật mặt kia 2 phút. Vắt chanh, rắc dill lên trên.'
        ]),
        prep_time: 5,
        cook_time: 10,
        difficulty: 'Vừa',
        category_name: 'Chiên/Rán',
        ingredients: [
            { name: 'Cá hồi', quantity: 400, unit: 'g', cat: 'Cá' },
            { name: 'Chanh', quantity: 1, unit: 'quả', cat: 'Rau củ' },
            { name: 'Dầu ô liu', quantity: 2, unit: 'muỗng canh', cat: 'Gia vị' }
        ]
    },
    // --- HẢI SẢN (SEAFOOD) ---
    {
        name: 'Tôm Sốt Cà Chua',
        main_ingredient: 'Hải sản',
        image_url: '',
        description: 'Tôm tươi sốt cà chua chua ngọt, màu đỏ đẹp hấp dẫn.',
        instructions: JSON.stringify([
            'Tôm bóc vỏ, rút chỉ, ướp muối tiêu tỏi.',
            'Xào tỏi thơm, cho tôm vào xào chín hồng.',
            'Cho cà chua thái hạt lựu vào xào cùng.',
            'Nêm nước mắm, đường, tương ớt cho vừa miệng.'
        ]),
        prep_time: 15,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Tôm sú', quantity: 300, unit: 'g', cat: 'Hải sản' },
            { name: 'Cà chua', quantity: 3, unit: 'quả', cat: 'Rau củ' },
            { name: 'Tỏi', quantity: 3, unit: 'tép', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Sò Huyết Xào Tỏi',
        main_ingredient: 'Hải sản',
        image_url: '',
        description: 'Sò huyết xào tỏi bơ nhanh tay, vừa chín tới ngọt thịt.',
        instructions: JSON.stringify([
            'Sò huyết ngâm nước muối, cọ rửa sạch.',
            'Luộc sơ đến khi vừa hé miệng.',
            'Xào tỏi bơ, cho sò vào đảo nhanh.',
            'Nêm nước mắm, tiêu, hành lá.'
        ]),
        prep_time: 20,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Sò huyết', quantity: 500, unit: 'g', cat: 'Hải sản' },
            { name: 'Tỏi', quantity: 4, unit: 'tép', cat: 'Gia vị' },
            { name: 'Bơ', quantity: 20, unit: 'g', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Canh Hải Sản Chua Cay',
        main_ingredient: 'Hải sản',
        image_url: '',
        description: 'Canh hải sản tổng hợp vị chua cay kích thích, đậm đà.',
        instructions: JSON.stringify([
            'Tôm, mực, ngao làm sạch.',
            'Nấu nước dùng với sả, ớt, nước cốt me.',
            'Cho hải sản vào nấu chín.',
            'Nêm nước mắm, đường, ớt, vắt chanh, thêm rau thơm.'
        ]),
        prep_time: 20,
        cook_time: 20,
        difficulty: 'Vừa',
        category_name: 'Canh',
        ingredients: [
            { name: 'Tôm sú', quantity: 200, unit: 'g', cat: 'Hải sản' },
            { name: 'Mực ống', quantity: 200, unit: 'g', cat: 'Hải sản' },
            { name: 'Me', quantity: 50, unit: 'g', cat: 'Gia vị' },
            { name: 'Sả', quantity: 2, unit: 'cây', cat: 'Gia vị' }
        ]
    },
    // --- ĐẬU HŨ / CHAY ---
    {
        name: 'Đậu Hũ Kho Nước Dừa',
        main_ingredient: 'Đậu hũ',
        image_url: '',
        description: 'Đậu hũ kho nước dừa béo ngọt, thấm đều gia vị.',
        instructions: JSON.stringify([
            'Đậu hũ thái miếng, chiên vàng đều.',
            'Phi tỏi hành thơm.',
            'Cho đậu vào, đổ nước dừa vào xâm xấp.',
            'Nêm nước mắm, đường, kho lửa nhỏ đến khi cạn.'
        ]),
        prep_time: 10,
        cook_time: 20,
        difficulty: 'Dễ',
        category_name: 'Kho',
        ingredients: [
            { name: 'Đậu hũ', quantity: 400, unit: 'g', cat: 'Đậu hũ' },
            { name: 'Nước dừa tươi', quantity: 300, unit: 'ml', cat: 'Đồ uống' },
            { name: 'Tỏi', quantity: 2, unit: 'tép', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Canh Đậu Hũ Cà Chua',
        main_ingredient: 'Đậu hũ',
        image_url: '',
        description: 'Canh đậu hũ cà chua thanh mát, dễ nấu, hợp mọi bữa cơm.',
        instructions: JSON.stringify([
            'Cà chua thái múi cau, đậu hũ thái miếng.',
            'Phi hành tỏi, cho cà chua vào xào mềm.',
            'Đổ nước vào đun sôi, cho đậu hũ vào.',
            'Nêm nước mắm, muối, hành lá.'
        ]),
        prep_time: 5,
        cook_time: 15,
        difficulty: 'Dễ',
        category_name: 'Canh',
        ingredients: [
            { name: 'Đậu hũ', quantity: 300, unit: 'g', cat: 'Đậu hũ' },
            { name: 'Cà chua', quantity: 3, unit: 'quả', cat: 'Rau củ' },
            { name: 'Hành lá', quantity: 2, unit: 'nhánh', cat: 'Rau củ' }
        ]
    },
    // --- RAU CỦ ---
    {
        name: 'Rau Cải Luộc Chấm Mắm Tỏi',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Rau cải luộc xanh mướt, chấm mắm tỏi ớt chua ngọt.',
        instructions: JSON.stringify([
            'Nước sôi cho chút muối và dầu ăn.',
            'Luộc rau cải 2-3 phút đến vừa chín giòn.',
            'Vớt ra xả nước lạnh.',
            'Pha nước chấm: mắm, đường, tỏi, ớt, chanh.'
        ]),
        prep_time: 5,
        cook_time: 5,
        difficulty: 'Dễ',
        category_name: 'Luộc',
        ingredients: [
            { name: 'Cải ngọt', quantity: 400, unit: 'g', cat: 'Rau củ' },
            { name: 'Nước mắm', quantity: 2, unit: 'muỗng canh', cat: 'Gia vị' },
            { name: 'Tỏi', quantity: 2, unit: 'tép', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Bí Đỏ Xào Tỏi',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Bí đỏ xào tỏi mềm ngọt tự nhiên, đơn giản nhưng ngon.',
        instructions: JSON.stringify([
            'Bí đỏ gọt vỏ, thái miếng mỏng vừa ăn.',
            'Phi tỏi thơm với dầu ăn.',
            'Cho bí vào xào lửa vừa, thêm chút nước.',
            'Nêm muối, hạt nêm, xào đến khi bí mềm.'
        ]),
        prep_time: 10,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Bí đỏ', quantity: 400, unit: 'g', cat: 'Rau củ' },
            { name: 'Tỏi', quantity: 3, unit: 'tép', cat: 'Gia vị' },
            { name: 'Dầu ăn', quantity: 2, unit: 'muỗng canh', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Canh Khoai Lang Lá Lốt',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Canh ngọn khoai lang với lá lốt, mộc mạc và bổ dưỡng.',
        instructions: JSON.stringify([
            'Ngọn khoai lang nhặt sạch.',
            'Tôm khô ngâm nở.',
            'Phi hành, xào tôm khô.',
            'Đổ nước sôi, cho rau vào nấu chín, nêm muối.'
        ]),
        prep_time: 10,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Canh',
        ingredients: [
            { name: 'Ngọn khoai lang', quantity: 300, unit: 'g', cat: 'Rau củ' },
            { name: 'Tôm khô', quantity: 30, unit: 'g', cat: 'Hải sản' },
            { name: 'Hành tím', quantity: 1, unit: 'củ', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Khoai Tây Xào Cà Rốt',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Khoai tây và cà rốt xào tỏi bơ, màu sắc đẹp, ngọt tự nhiên.',
        instructions: JSON.stringify([
            'Khoai tây, cà rốt thái sợi hoặc miếng nhỏ.',
            'Chiên sơ khoai tây vàng.',
            'Xào tỏi bơ, cho cà rốt vào trước.',
            'Cho khoai tây vào, nêm muối tiêu, xào đều.'
        ]),
        prep_time: 15,
        cook_time: 15,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Khoai tây', quantity: 300, unit: 'g', cat: 'Rau củ' },
            { name: 'Cà rốt', quantity: 2, unit: 'củ', cat: 'Rau củ' },
            { name: 'Bơ', quantity: 20, unit: 'g', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Nấm Xào Rau Cải',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Các loại nấm xào rau cải xanh, thanh đạm và bổ dưỡng.',
        instructions: JSON.stringify([
            'Nấm kim châm, nấm bào ngư rửa sạch.',
            'Cải thìa hoặc cải xanh cắt khúc.',
            'Phi tỏi thơm, xào nấm đến khi săn.',
            'Cho rau vào xào cùng, nêm dầu hào, muối.'
        ]),
        prep_time: 10,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Nấm kim châm', quantity: 200, unit: 'g', cat: 'Rau củ' },
            { name: 'Nấm bào ngư', quantity: 200, unit: 'g', cat: 'Rau củ' },
            { name: 'Cải thìa', quantity: 200, unit: 'g', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Đậu Bắp Luộc Chấm Mắm',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Đậu bắp luộc chín tới, chấm nước mắm gừng đơn giản ngon.',
        instructions: JSON.stringify([
            'Đậu bắp rửa sạch, cắt bỏ đầu.',
            'Luộc trong nước sôi có muối 3-4 phút.',
            'Vớt ra để ráo.',
            'Pha nước chấm mắm gừng tỏi ớt.'
        ]),
        prep_time: 5,
        cook_time: 5,
        difficulty: 'Dễ',
        category_name: 'Luộc',
        ingredients: [
            { name: 'Đậu bắp', quantity: 300, unit: 'g', cat: 'Rau củ' },
            { name: 'Nước mắm', quantity: 2, unit: 'muỗng canh', cat: 'Gia vị' },
            { name: 'Gừng', quantity: 1, unit: 'nhánh', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Canh Spinach Trứng',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Canh rau chân vịt nấu trứng, nhanh 10 phút, bổ sắt.',
        instructions: JSON.stringify([
            'Rau chân vịt rửa sạch.',
            'Đập trứng đánh tan với chút muối.',
            'Nấu nước sôi, nêm muối hạt nêm.',
            'Đổ trứng vào khuấy tròn, cho rau vào nấu chín.'
        ]),
        prep_time: 5,
        cook_time: 10,
        difficulty: 'Dễ',
        category_name: 'Canh',
        ingredients: [
            { name: 'Rau chân vịt', quantity: 300, unit: 'g', cat: 'Rau củ' },
            { name: 'Trứng gà', quantity: 2, unit: 'quả', cat: 'Trứng' }
        ]
    },
    // --- CƠM ---
    {
        name: 'Cơm Chiên Dương Châu',
        main_ingredient: 'Lợn',
        image_url: '',
        description: 'Cơm chiên đặc trưng với tôm, xúc xích, trứng và rau củ.',
        instructions: JSON.stringify([
            'Cơm nguội để ráo.',
            'Xào tỏi thơm, cho tôm và xúc xích vào xào chín.',
            'Cho cơm vào đảo đều lửa lớn.',
            'Tạo ô giữa, đổ trứng đánh tan vào trộn cùng cơm.',
            'Nêm nước mắm, hạt nêm, cho đậu hà lan và hành lá vào.'
        ]),
        prep_time: 10,
        cook_time: 15,
        difficulty: 'Vừa',
        category_name: 'Cơm',
        ingredients: [
            { name: 'Cơm nguội', quantity: 400, unit: 'g', cat: 'Tinh bột' },
            { name: 'Tôm sú', quantity: 100, unit: 'g', cat: 'Hải sản' },
            { name: 'Trứng gà', quantity: 2, unit: 'quả', cat: 'Trứng' },
            { name: 'Xúc xích', quantity: 100, unit: 'g', cat: 'Thịt' }
        ]
    },
    {
        name: 'Cơm Gà Hội An',
        main_ingredient: 'Gà',
        image_url: '',
        description: 'Cơm gà nức tiếng Hội An với cơm vàng thơm và gà xé trộn rau răm.',
        instructions: JSON.stringify([
            'Luộc gà với gừng, sả, nêm muối.',
            'Dùng nước luộc gà nấu cơm với nghệ và dầu ăn.',
            'Xé thịt gà, trộn với rau răm, hành phi, nước mắm.',
            'Dọn cơm vàng kèm gà xé và nước dùng.'
        ]),
        prep_time: 20,
        cook_time: 45,
        difficulty: 'Vừa',
        category_name: 'Cơm',
        ingredients: [
            { name: 'Thịt gà', quantity: 600, unit: 'g', cat: 'Thịt' },
            { name: 'Gạo tẻ', quantity: 400, unit: 'g', cat: 'Tinh bột' },
            { name: 'Rau răm', quantity: 50, unit: 'g', cat: 'Rau củ' },
            { name: 'Nghệ bột', quantity: 1, unit: 'muỗng cà phê', cat: 'Gia vị' }
        ]
    },
    // --- LẨU ---
    {
        name: 'Lẩu Thái Hải Sản',
        main_ingredient: 'Hải sản',
        image_url: '',
        description: 'Lẩu Thái chua cay sả ớt với hải sản tươi ngon.',
        instructions: JSON.stringify([
            'Nấu nước dùng với sả, ớt, lá chanh, nước cốt dừa.',
            'Nêm nước mắm, đường, nước cốt me cho vị chua cay.',
            'Cho tôm, mực, ngao vào nhúng chín.',
            'Ăn kèm bún tươi và rau sống.'
        ]),
        prep_time: 20,
        cook_time: 30,
        difficulty: 'Vừa',
        category_name: 'Lẩu',
        ingredients: [
            { name: 'Tôm sú', quantity: 300, unit: 'g', cat: 'Hải sản' },
            { name: 'Mực ống', quantity: 300, unit: 'g', cat: 'Hải sản' },
            { name: 'Sả', quantity: 3, unit: 'cây', cat: 'Gia vị' },
            { name: 'Nước cốt dừa', quantity: 200, unit: 'ml', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Lẩu Bò Nhúng Dấm',
        main_ingredient: 'Bò',
        image_url: '',
        description: 'Bò tươi nhúng nước dấm ngọt, cuốn bánh tráng rau sống.',
        instructions: JSON.stringify([
            'Nấu nước nhúng: nước dừa, dấm, sả, đường, muối.',
            'Thịt bò thái mỏng.',
            'Nhúng bò qua nước sôi vừa chín tới.',
            'Cuốn bánh tráng với bún, rau sống, đồ chua.'
        ]),
        prep_time: 20,
        cook_time: 20,
        difficulty: 'Vừa',
        category_name: 'Lẩu',
        ingredients: [
            { name: 'Thịt bò', quantity: 400, unit: 'g', cat: 'Thịt' },
            { name: 'Bánh tráng', quantity: 200, unit: 'g', cat: 'Tinh bột' },
            { name: 'Nước dừa tươi', quantity: 500, unit: 'ml', cat: 'Đồ uống' },
            { name: 'Dấm', quantity: 3, unit: 'muỗng canh', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Canh Bí Đỏ Nấu Tôm',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Canh bí đỏ ngọt tự nhiên nấu cùng tôm tươi, đơn giản bổ dưỡng.',
        instructions: JSON.stringify([
            'Bí đỏ gọt vỏ, thái miếng vuông.',
            'Tôm bóc vỏ, rút chỉ.',
            'Phi hành thơm, xào tôm chín hồng.',
            'Cho bí vào, đổ nước xâm xấp, nấu đến khi bí mềm.',
            'Nêm muối, hạt nêm, hành lá.'
        ]),
        prep_time: 10,
        cook_time: 20,
        difficulty: 'Dễ',
        category_name: 'Canh',
        ingredients: [
            { name: 'Bí đỏ', quantity: 400, unit: 'g', cat: 'Rau củ' },
            { name: 'Tôm sú', quantity: 200, unit: 'g', cat: 'Hải sản' },
            { name: 'Hành lá', quantity: 2, unit: 'nhánh', cat: 'Rau củ' }
        ]
    },
    {
        name: 'Sườn Hấp Mận',
        main_ingredient: 'Lợn',
        image_url: '',
        description: 'Sườn non hấp mận chua ngọt đặc biệt, thịt mềm thơm lạ miệng.',
        instructions: JSON.stringify([
            'Sườn non chặt miếng, chần sơ nước sôi.',
            'Ướp sườn với mận ngâm, nước mắm, đường, tỏi, tiêu 30 phút.',
            'Hấp cách thủy 30-35 phút đến khi sườn mềm.',
            'Rắc hành lá, tiêu trước khi dọn.'
        ]),
        prep_time: 35,
        cook_time: 35,
        difficulty: 'Vừa',
        category_name: 'Luộc',
        ingredients: [
            { name: 'Sườn non', quantity: 500, unit: 'g', cat: 'Thịt' },
            { name: 'Mận muối', quantity: 5, unit: 'quả', cat: 'Gia vị' },
            { name: 'Tỏi', quantity: 2, unit: 'tép', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Mướp Xào Tỏi',
        main_ingredient: 'Rau củ',
        image_url: '',
        description: 'Mướp xào tỏi mềm mướt, ngọt thanh, nhanh 10 phút là xong.',
        instructions: JSON.stringify([
            'Mướp gọt vỏ, thái lát xéo hoặc miếng vừa ăn.',
            'Phi tỏi thơm với dầu ăn.',
            'Cho mướp vào xào lửa lớn.',
            'Nêm muối, hạt nêm, xào đến khi mướp vừa mềm.'
        ]),
        prep_time: 5,
        cook_time: 8,
        difficulty: 'Dễ',
        category_name: 'Xào',
        ingredients: [
            { name: 'Mướp hương', quantity: 400, unit: 'g', cat: 'Rau củ' },
            { name: 'Tỏi', quantity: 3, unit: 'tép', cat: 'Gia vị' },
            { name: 'Dầu ăn', quantity: 2, unit: 'muỗng canh', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Gà Chiên Giòn Kiểu Hàn',
        main_ingredient: 'Gà',
        image_url: '',
        description: 'Gà chiên giòn áo sốt ngọt cay kiểu Hàn Quốc, siêu hấp dẫn.',
        instructions: JSON.stringify([
            'Gà chặt miếng, ướp muối, tiêu, tỏi, gừng 30 phút.',
            'Lăn qua bột chiên giòn.',
            'Chiên ngập dầu lần 1 ở 160°C, lần 2 ở 180°C cho giòn.',
            'Trộn sốt: tương gochujang, mật ong, tỏi, xì dầu.',
            'Áo sốt lên gà, rắc mè rang.'
        ]),
        prep_time: 40,
        cook_time: 20,
        difficulty: 'Vừa',
        category_name: 'Chiên/Rán',
        ingredients: [
            { name: 'Thịt gà', quantity: 600, unit: 'g', cat: 'Thịt' },
            { name: 'Bột chiên giòn', quantity: 100, unit: 'g', cat: 'Tinh bột' },
            { name: 'Tương ớt Hàn', quantity: 2, unit: 'muỗng canh', cat: 'Gia vị' },
            { name: 'Mật ong', quantity: 2, unit: 'muỗng canh', cat: 'Gia vị' }
        ]
    },
    {
        name: 'Canh Ngao Nấu Dưa Chua',
        main_ingredient: 'Hải sản',
        image_url: '',
        description: 'Ngao tươi nấu dưa cải chua, nước canh chua thanh đậm đà.',
        instructions: JSON.stringify([
            'Ngao ngâm nước muối ớt cho nhả cát, rửa sạch.',
            'Dưa cải chua thái khúc.',
            'Phi hành, cho dưa cải vào xào qua.',
            'Đổ nước vào đun sôi, cho ngao vào nấu đến khi ngao mở miệng.',
            'Nêm nước mắm, tắt bếp ngay.'
        ]),
        prep_time: 20,
        cook_time: 15,
        difficulty: 'Dễ',
        category_name: 'Canh',
        ingredients: [
            { name: 'Ngao', quantity: 500, unit: 'g', cat: 'Hải sản' },
            { name: 'Dưa cải chua', quantity: 200, unit: 'g', cat: 'Rau củ' },
            { name: 'Hành tím', quantity: 2, unit: 'củ', cat: 'Rau củ' }
        ]
    },
];
