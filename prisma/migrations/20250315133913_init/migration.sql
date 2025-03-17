-- CreateTable
CREATE TABLE `RFID` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `is_paired` BOOLEAN NOT NULL DEFAULT false,
    `chip_id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Domba` (
    `id` VARCHAR(191) NOT NULL,
    `nama_domba` VARCHAR(191) NULL,
    `usia` DATETIME(3) NULL,
    `jenis_kelamin` ENUM('Male', 'Female') NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sensor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_sensor` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kamera` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `panjang` DECIMAL(10, 2) NULL,
    `tinggi` DECIMAL(10, 2) NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,
    `chip_id` VARCHAR(191) NULL,
    `sensor_id` INTEGER NULL,
    `paired` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LoadcellBadan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `berat` DECIMAL(10, 2) NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,
    `chip_id` VARCHAR(191) NULL,
    `sensor_id` INTEGER NULL,
    `paired` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LoadcellPakan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `berat_pakan` DECIMAL(10, 2) NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,
    `chip_id` VARCHAR(191) NULL,
    `sensor_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aht` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `suhu` DECIMAL(10, 2) NULL,
    `kelembapan` DECIMAL(10, 2) NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,
    `chip_id` VARCHAR(191) NULL,
    `sensor_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mpu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `acc_x` DECIMAL(10, 2) NULL,
    `acc_y` DECIMAL(10, 2) NULL,
    `acc_z` DECIMAL(10, 2) NULL,
    `tinggi` DECIMAL(10, 2) NULL,
    `kondisi` BOOLEAN NULL DEFAULT false,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,
    `chip_id` VARCHAR(191) NULL,
    `sensor_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DataDombaPeriode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chip_id` VARCHAR(191) NULL,
    `kamera_id` INTEGER NULL,
    `loadcell_badan_id` INTEGER NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DataDombaKontinu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chip_id` INTEGER NULL,
    `mpu_id` INTEGER NULL,
    `loadcell_pakan_id` INTEGER NULL,
    `aht_id` INTEGER NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Kamera` ADD CONSTRAINT `Kamera_chip_id_fkey` FOREIGN KEY (`chip_id`) REFERENCES `Domba`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kamera` ADD CONSTRAINT `Kamera_sensor_id_fkey` FOREIGN KEY (`sensor_id`) REFERENCES `Sensor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LoadcellBadan` ADD CONSTRAINT `LoadcellBadan_chip_id_fkey` FOREIGN KEY (`chip_id`) REFERENCES `Domba`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LoadcellBadan` ADD CONSTRAINT `LoadcellBadan_sensor_id_fkey` FOREIGN KEY (`sensor_id`) REFERENCES `Sensor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LoadcellPakan` ADD CONSTRAINT `LoadcellPakan_chip_id_fkey` FOREIGN KEY (`chip_id`) REFERENCES `Domba`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LoadcellPakan` ADD CONSTRAINT `LoadcellPakan_sensor_id_fkey` FOREIGN KEY (`sensor_id`) REFERENCES `Sensor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aht` ADD CONSTRAINT `Aht_chip_id_fkey` FOREIGN KEY (`chip_id`) REFERENCES `Domba`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aht` ADD CONSTRAINT `Aht_sensor_id_fkey` FOREIGN KEY (`sensor_id`) REFERENCES `Sensor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mpu` ADD CONSTRAINT `Mpu_chip_id_fkey` FOREIGN KEY (`chip_id`) REFERENCES `Domba`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mpu` ADD CONSTRAINT `Mpu_sensor_id_fkey` FOREIGN KEY (`sensor_id`) REFERENCES `Sensor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataDombaPeriode` ADD CONSTRAINT `DataDombaPeriode_chip_id_fkey` FOREIGN KEY (`chip_id`) REFERENCES `Domba`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataDombaPeriode` ADD CONSTRAINT `DataDombaPeriode_kamera_id_fkey` FOREIGN KEY (`kamera_id`) REFERENCES `Kamera`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataDombaPeriode` ADD CONSTRAINT `DataDombaPeriode_loadcell_badan_id_fkey` FOREIGN KEY (`loadcell_badan_id`) REFERENCES `LoadcellBadan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataDombaKontinu` ADD CONSTRAINT `DataDombaKontinu_chip_id_fkey` FOREIGN KEY (`chip_id`) REFERENCES `RFID`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataDombaKontinu` ADD CONSTRAINT `DataDombaKontinu_mpu_id_fkey` FOREIGN KEY (`mpu_id`) REFERENCES `Mpu`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataDombaKontinu` ADD CONSTRAINT `DataDombaKontinu_aht_id_fkey` FOREIGN KEY (`aht_id`) REFERENCES `Aht`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataDombaKontinu` ADD CONSTRAINT `DataDombaKontinu_loadcell_pakan_id_fkey` FOREIGN KEY (`loadcell_pakan_id`) REFERENCES `LoadcellPakan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
