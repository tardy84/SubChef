-- Drop tables if they exist to start fresh during seeding
DROP TABLE IF EXISTS recipe_ingredients;
DROP TABLE IF EXISTS ingredients;
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS categories;

-- Categories Table
CREATE TABLE categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    icon TEXT
);

-- Recipes Table
CREATE TABLE recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    instructions TEXT NOT NULL, -- Stored as JSON string array
    prep_time INTEGER, -- In minutes
    cook_time INTEGER, -- In minutes
    difficulty TEXT, -- 'Dễ', 'Vừa', 'Khó'
    servings INTEGER DEFAULT 2,
    category_id INTEGER,
    image_url TEXT,
    main_ingredient TEXT, -- New: 'Lợn', 'Bò', 'Gà', 'Cá', 'Hải sản', 'Rau củ', etc.
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(category_id) REFERENCES categories(id)
);

-- Ingredients Table (Master list of all ingredients)
CREATE TABLE ingredients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    default_unit TEXT,
    category TEXT -- e.g., 'Thịt', 'Rau củ', 'Gia vị'
);

-- Recipe Ingredients (Junction table with quantity and specific unit)
CREATE TABLE recipe_ingredients (
    recipe_id INTEGER,
    ingredient_id INTEGER,
    quantity REAL,
    unit TEXT,
    notes TEXT,
    PRIMARY KEY(recipe_id, ingredient_id),
    FOREIGN KEY(recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY(ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE
);
