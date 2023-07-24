CREATE TABLE `projects` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `publication_date` DATE NOT NULL,
  `technologies` VARCHAR(255) NOT NULL,
  `summary` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `video_desktop` VARCHAR(255) NOT NULL,
  `video_mobile` VARCHAR(255),
  `screenshot_desktop` VARCHAR(255) NOT NULL,
  `screenshot_mobile` VARCHAR(255) NOT NULL,
  `image_1` VARCHAR(255) NOT NULL,
  `image_2` VARCHAR(255) NOT NULL,
  `image_3` VARCHAR(255) NOT NULL,
  `image_4` VARCHAR(255),
  `image_5` VARCHAR(255),
  `image_6` VARCHAR(255),
  `image_7` VARCHAR(255),
  `image_8` VARCHAR(255),
  `image_9` VARCHAR(255),
  `image_10` VARCHAR(255)
);
INSERT INTO `projects` (`name`, `publication_date`, `technologies`, `summary`, `description`, `video_desktop`, `screenshot_desktop`, `screenshot_mobile`, `image_1`, `image_2`, `image_3`)
VALUES
  ('Cruzzle', '2023-07-27', 'React, MaterialUI, Tailwind, Figma, Express, Prisma', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu. Nunc ullamcorper lectus massa, non maximus nisl volutpat sed. Nunc at magna nibh. Cras ut nunc metus. Nullam quis vehicula erat.', 'https://svgshare.com/i/vhs.svg', 'https://svgshare.com/i/vet.svg', 'https://svgshare.com/i/vf5.svg', 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg', 'https://svgshare.com/i/vhe.svg'),
  ('Emmaüs Connect', '2023-06-30', 'React, MaterialUI, Tailwind, Figma, Express', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu. Nunc ullamcorper lectus massa, non maximus nisl volutpat sed. Nunc at magna nibh. Cras ut nunc metus. Nullam quis vehicula erat.', 'https://svgshare.com/i/vhs.svg', 'https://svgshare.com/i/vet.svg', 'https://svgshare.com/i/vf5.svg', 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg', 'https://svgshare.com/i/vhe.svg'),
  ('Hidely Days', '2023-05-12', 'React, SCSS, Figma, WeatherAPI', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu. Nunc ullamcorper lectus massa, non maximus nisl volutpat sed. Nunc at magna nibh. Cras ut nunc metus. Nullam quis vehicula erat.', 'https://svgshare.com/i/vhs.svg', 'https://svgshare.com/i/vet.svg', 'https://svgshare.com/i/vf5.svg', 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg', 'https://svgshare.com/i/vhe.svg'),
  ('Burdiga Live', '2023-05-05', 'React, SCSS, Figma, SpotifyAPI', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu. Nunc ullamcorper lectus massa, non maximus nisl volutpat sed. Nunc at magna nibh. Cras ut nunc metus. Nullam quis vehicula erat.', 'https://svgshare.com/i/vhs.svg', 'https://svgshare.com/i/vet.svg', 'https://svgshare.com/i/vf5.svg', 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg', 'https://svgshare.com/i/vhe.svg');

CREATE TABLE `admin` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `hashed_password` varchar(255) NOT NULL
);
INSERT INTO `admin` (`email`, `hashed_password`)
VALUES
('admin@example.com', 'not-hashed-yet');