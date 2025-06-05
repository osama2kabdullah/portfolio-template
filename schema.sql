-- schema.sql

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    password_hash VARCHAR(128) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- dummy data
INSERT INTO users (username, email, password_hash) VALUES
('john_doe', 'john@example.com', 'hashedpassword123'),
('jane_smith', 'jane@example.com', 'hashedpassword456'),
('test_user1', 'test1@example.com', 'testhash789'),
('developer_ali', 'ali@devmail.com', 'supersecurehash321'),
('newbie123', 'newbie@demo.com', 'simplehash456');
