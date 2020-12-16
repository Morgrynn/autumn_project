CREATE TABLE public.cpu_table (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    core_count INTEGER NOT NULL,
    core_clock VARCHAR(50) NOT NULL,
    boost_clock VARCHAR(50) NOT NULL,
    tdp VARCHAR(50) NOT NULL,
    integrated_graphics VARCHAR(50) NOT NULL,
    smt VARCHAR(50) NOT NULL,
    rating INTEGER NOT NULL,
    price DECIMAL(12,2) NOT null,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE public.cooler_table (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    fan_rpm VARCHAR(50) NOT NULL,
    noise_level VARCHAR(50) NOT NULL,
    color VARCHAR(50) NOT NULL,
    radiator_size VARCHAR(50) NOT NULL,
    rating INTEGER NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE public.motherboards_table (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    socket_cpu VARCHAR(50) NOT NULL,
    form_factor VARCHAR(50) NOT NULL,
    memory_max VARCHAR(50) NOT NULL,
    memory_slots INTEGER NOT NULL, 
    color VARCHAR(50) NOT NULL,
    rating INTEGER NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE public.gpu_table (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    chipset VARCHAR(50) NOT NULL,
    memory VARCHAR(50) NOT NULL,
    core_clock VARCHAR(50) NOT NULL,
    boost_clock VARCHAR(50) NOT NULL, 
    color VARCHAR(50) NOT NULL,
    length VARCHAR(50) NOT NULL,
    rating INTEGER NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE public.memory_table (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    speed VARCHAR(50) NOT NULL,
    modules VARCHAR(50) NOT NULL,
    price_pergb VARCHAR(50) NOT NULL,
    color VARCHAR(50) NOT NULL,
    first_word_latency VARCHAR(50) NOT NULL,
    cas_latency VARCHAR(50) NOT NULL,
    rating INTEGER NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE storage_table (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    capacity VARCHAR(50) NOT NULL,
    price_pergb VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    cache VARCHAR(50) NOT NULL,
    form_factor VARCHAR(50) NOT NULL,
    interface VARCHAR(50) NOT NULL,
    rating INTEGER NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE cases_table (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    color VARCHAR(50) NOT NULL,
    side_panel_window VARCHAR(50) NOT NULL,
    internal_bays INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE power_supply_table (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    form_factor VARCHAR(50) NOT NULL,
    efficiency_rating VARCHAR(50) NOT NULL,
    wattage VARCHAR(50) NOT NULL,
    modular VARCHAR(50) NOT NULL,
    color VARCHAR(50) NOT NULL,
    rating INTEGER NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    image VARCHAR(255) NOT NULL
);

INSERT INTO public.cpu_table(name,core_count,core_clock,boost_clock,tdp,integrated_graphics,smt,rating,price,image) VALUES('AMD 2650','2','1.45 GHz','-','25 W','Radeon HD 8240','No','5','59.61','/images/cpu/cpu_1.jpg');
INSERT INTO public.cpu_table(name,core_count,core_clock,boost_clock,tdp,integrated_graphics,smt,rating,price,image) VALUES('AMD Ryzen 5 3600','6','3.6 GHz','4.2','65 W','None','Yes','5','219.99','/images/cpu/c7baf2c9c9cc15ae23adb24c2f4316fc.256p.jpg');
INSERT INTO public.cpu_table(name,core_count,core_clock,boost_clock,tdp,integrated_graphics,smt,rating,price,image) VALUES('Intel Core i7-10700K','8','3.8 GHz','5.1 GHz','125 W','Intel UHD Graphics 630','Yes','5','369.99','/images/cpu/6a40f9732bef504af112c33a980482b2.256p.jpg');
INSERT INTO public.cpu_table(name,core_count,core_clock,boost_clock,tdp,integrated_graphics,smt,rating,price,image) VALUES('Intel Core i5-9600K','6','3.7 GHz','4.6 GHz','95 W','Intel UHD Graphics 630','No','5','195.99','/images/cpu/33f96aec821c5c10f4b1fd636a7d1881.256p.jpg');
INSERT INTO public.cpu_table(name,core_count,core_clock,boost_clock,tdp,integrated_graphics,smt,rating,price,image) VALUES('AMD Ryzen 7 3700X','8','3.6 GHz','4.4 GHz','65 W','None','Yes','5','324.98','/images/cpu/23cd3adfd50037c1b44d6d53edb15248.256p.jpg');
INSERT INTO public.cpu_table(name,core_count,core_clock,boost_clock,tdp,integrated_graphics,smt,rating,price,image) VALUES('Intel Core i5-7400','4','3 GHz','3.5 GHz','65 W','Intel HD Graphics 630','No','4','180.70','/images/cpu/0c2441d24af10b2aff285308b4e32d03.256p.jpg');
INSERT INTO public.cpu_table(name,core_count,core_clock,boost_clock,tdp,integrated_graphics,smt,rating,price,image) VALUES('AMD Athlon X4 950','4','3.5 GHz','3.8 GHz','65 W','None','No','4','177.87','/images/cpu/41TPYmrq2hL.jpg');
INSERT INTO public.cpu_table(name,core_count,core_clock,boost_clock,tdp,integrated_graphics,smt,rating,price,image) VALUES('Intel Celeron G3900','2','2.8 GHz','-','51 W','Intel HD Graphics 510','No','2','145.78','/images/cpu/ff432f020170250f7de02636651e1743.256p.jpg');


INSERT INTO gpu_table(name,chipset,memory,core_clock,boost_clock,color,length,rating,price,image) VALUES('MSI VENTUS XS OC','GeForce GTX 1660 SUPER', '6 GB', '1530 MHz', '1815 MHz', 'Black/Silver', '203,962 mm','5','259.99','/images/gpu/9c57e7f04b05270bcf7edb9fcf4c715c.256p.jpg');
INSERT INTO gpu_table(name,chipset,memory,core_clock,boost_clock,color,length,rating,price,image) VALUES('MSI GTX 1050 Ti 4GT OC','GeForce GTX 1050 Ti', '4 GB', '1341 MHz', '1455 MHz', 'Black / White', '215 mm','5','135.88','/images/gpu/1085f0f0294e6eb6340c70bf6324a9f8.256p.jpg');
INSERT INTO gpu_table(name,chipset,memory,core_clock,boost_clock,color,length,rating,price,image) VALUES('MSI GAMING X','Radeon RX 5700 XT', '8 GB', '1730 MHz', '1980 MHz', 'Silver / Black', '297 mm','5','384.99','/images/gpu/fcd86c9bb7dacb6399ddcde5e453a0fd.256p.jpg');
INSERT INTO gpu_table(name,chipset,memory,core_clock,boost_clock,color,length,rating,price,image) VALUES('Gigabyte GAMING OC','GeForce GTX 1660 SUPER', '6 GB', '1550 MHz', '1860 MHz', 'Black / Silver', '280 mm','5','399.99','/images/gpu/41KatjFg1-L.jpg');
INSERT INTO gpu_table(name,chipset,memory,core_clock,boost_clock,color,length,rating,price,image) VALUES('NVIDIA Founders Edition','GeForce RTX 3070', '8 GB', '1500 MHz', '1730 MHz', 'Black', '242 mm','5','399.99','/images/gpu/7b87f1151133cd104c83a41914b02457.256p.jpg');
INSERT INTO gpu_table(name,chipset,memory,core_clock,boost_clock,color,length,rating,price,image) VALUES('PNY UPRISING','GeForce RTX 3070', '8 GB', '1500 MHz', '1725 MHz', 'Black', '264.922 mm','0','549.94','/images/gpu/200b4e048d11f6870e697e2693490cd3.256p.jpg');
INSERT INTO gpu_table(name,chipset,memory,core_clock,boost_clock,color,length,rating,price,image) VALUES('Asus R7240-2GD3-L','Radeon R7 240', '2 GB', '730 MHz', '-', 'Black / Red', '159 mm','2','132.95','/images/gpu/eeb6dcfa8676d2e741405c9173c01e92.256p.jpg');
INSERT INTO gpu_table(name,chipset,memory,core_clock,boost_clock,color,length,rating,price,image) VALUES('MSI GAMING X','Radeon RX 5500 XT', '8 GB', '1685 MHz', '1845 MHz', 'Black / Red', '247 mm','3','279.69','/images/gpu/e53018b22abb9ac3394c4dc0cff7b07a.256p.jpg');


INSERT INTO motherboards_table(name,socket_cpu,form_factor,memory_max,memory_slots,color,rating,price,image) VALUES('MSI B450 TOMAHAWK MAX','AM4', 'ATX', '64 GB', '4', 'Black','5','114.99','/images/motherboards/0a8a0ca77620c63b68fec6323537d50a.256p.jpg');
INSERT INTO motherboards_table(name,socket_cpu,form_factor,memory_max,memory_slots,color,rating,price,image) VALUES('Gigabyte B450M DS3H','AM4', 'Micro ATX', '64 GB', '4', 'Black / Silver','4','71.98','/images/motherboards/176028811e50cad67b57ed0e604229c9.256p.jpg');
INSERT INTO motherboards_table(name,socket_cpu,form_factor,memory_max,memory_slots,color,rating,price,image) VALUES('Asus ROG STRIX B450-F GAMING','AM4', 'ATX', '64 GB', '4', 'Black','5','120.99','/images/motherboards/66e5b5e4d0a52b6a2f99bb53bf52eee7.256p.jpg');
INSERT INTO motherboards_table(name,socket_cpu,form_factor,memory_max,memory_slots,color,rating,price,image) VALUES('MSI MAG B550 TOMAHAWK','AM4', 'ATX', '128 GB', '4', 'Black / Silver','5','179.99','/images/motherboards/52ee465cbd64b16145232d863524c066.256p.jpg');
INSERT INTO motherboards_table(name,socket_cpu,form_factor,memory_max,memory_slots,color,rating,price,image) VALUES('Asus TUF GAMING X570-PLUS (WI-FI)','AM4', 'ATX', '128 GB', '4', 'Black / Gold','5','189.00','/images/motherboards/8d7d0435e8a2af93b5d91a1a5dccd476.256p.jpg');
INSERT INTO motherboards_table(name,socket_cpu,form_factor,memory_max,memory_slots,color,rating,price,image) VALUES('MSI Z390-A PRO','LGA1151', 'ATX', '128 GB', '4', 'Brown / Black','5','119.99','/images/motherboards/65d2e2e1dd6c41fe051500c6d88ffe0c.256p.jpg');
INSERT INTO motherboards_table(name,socket_cpu,form_factor,memory_max,memory_slots,color,rating,price,image) VALUES('MSI B550-A PRO','AM4', 'ATX', '128 GB', '4', 'Black / Silver','5','139.99','/images/motherboards/662aee2a85bbe3b7e12224e381e57d24.256p.jpg');
INSERT INTO motherboards_table(name,socket_cpu,form_factor,memory_max,memory_slots,color,rating,price,image) VALUES('MSI H67MS-E23 (B3)','LGA1155', 'Micro ATX', '16 GB', '2', 'Black / Blue','2','79.99','/images/motherboards/6f51f21f1b84fd89f116cd6e34359df7.med.256p.jpg');


INSERT INTO memory_table(name,speed,modules,price_pergb,color,first_word_latency,cas_latency,rating,price,image) VALUES('Corsair Vengeance LPX 16 GB','DDR4-3200', '2 x 8GB', '$4.061', 'Black / Yellow', '10 ns', '16','5','64.98','/images/memory/835ab3efad1be13bbe53beef3e3c6f96.256p.jpg');
INSERT INTO memory_table(name,speed,modules,price_pergb,color,first_word_latency,cas_latency,rating,price,image) VALUES('Corsair Vengeance RGB Pro 16 GB','DDR4-3200', '2 x 8GB', '$5.187', 'Black', '10 ns', '16','5','82.99','/images/memory/87cd8e9d02ffb0997769f4a4d5969669.256p.jpg');
INSERT INTO memory_table(name,speed,modules,price_pergb,color,first_word_latency,cas_latency,rating,price,image) VALUES('Corsair Vengeance RGB Pro 32 GB','DDR4-3200', '2 x 16GB', '$4.468', 'Black', '10 ns', '16','5','142.99','/images/memory/51dcKTDbLCL.jpg');
INSERT INTO memory_table(name,speed,modules,price_pergb,color,first_word_latency,cas_latency,rating,price,image) VALUES('G.Skill Ripjaws V 16 GB','DDR4-3600', '2 x 8GB', '$4.687', 'Black', '8.889 ns', '16','5','74.99','/images/memory/a00199d12cb22ee1dc33639a754cca79.256p.jpg');
INSERT INTO memory_table(name,speed,modules,price_pergb,color,first_word_latency,cas_latency,rating,price,image) VALUES('Team T-FORCE VULCAN Z 16 GB','DDR4-3200', '2 x 8GB', '$5.833', 'Black', '10 ns', '16','5','74.99','/images/memory/96753a64597c28e46bf80ef7064b214b.256p.jpg');
INSERT INTO memory_table(name,speed,modules,price_pergb,color,first_word_latency,cas_latency,rating,price,image) VALUES('G.Skill Trident Z RGB 16 GB','DDR4-3600', '2 x 8GB', '$5.749', 'Black', '10 ns', '18','5','91.99','/images/memory/d19422479fca6e5117bb55db3d25eac2.256p.jpg');
INSERT INTO memory_table(name,speed,modules,price_pergb,color,first_word_latency,cas_latency,rating,price,image) VALUES('Kingston KVR16LN11K2/8 8 GB','DDR3-1600', '2 x 4GB', '$5.624', 'Black / Green', '13.75 ns', '11','2','44.99','/images/memory/fac0715f6ed3f6a48dc1137d8b9c6605.256p.jpg');
INSERT INTO memory_table(name,speed,modules,price_pergb,color,first_word_latency,cas_latency,rating,price,image) VALUES('Corsair Vengeance LPX 64 GB','DDR4-3333', '4 x 16GB', '-', 'Red', '9.601 ns', '16','2','39.79','/images/memory/e965afa9afa3175671d8cbb8e7b9e9cd.256p.jpg');


INSERT INTO storage_table(name,capacity,price_pergb,type,cache,form_factor,interface,rating,price,image) VALUES('Seagate Barracuda Compute','2 TB','$0.027','7200RPM','256 MB','3.5','SATA 6 Gb/s','5','54.99','/images/storage/c7b5b7dacbecdcdd0e073b761193eef6.256p.jpg');
INSERT INTO storage_table(name,capacity,price_pergb,type,cache,form_factor,interface,rating,price,image) VALUES('Samsung 970 Evo','1 TB','$0.149','SSD','1024 MB','M.2-2280','M.2 (M)','5','148.66','/images/storage/09a31f32abb3daaf5ed9b849bd60e675.256p.jpg');
INSERT INTO storage_table(name,capacity,price_pergb,type,cache,form_factor,interface,rating,price,image) VALUES('Crucial P1','1 TB','$0.094','SSD','-','M.2-2280','M.2 (M)','5','94.49','/images/storage/c375bc816cb1189605ece2421baadb94.256p.jpg');
INSERT INTO storage_table(name,capacity,price_pergb,type,cache,form_factor,interface,rating,price,image) VALUES('Western Digital Blue','500 GB','$0.108','SSD','-','M.2-2280','M.2 (B+M)','5','53.99','/images/storage/5d75e5e4274a02ca8924d7c4d2a575b2.256p.jpg');
INSERT INTO storage_table(name,capacity,price_pergb,type,cache,form_factor,interface,rating,price,image) VALUES('Hitachi Deskstar','3 TB','$0.033','7200RPM','64 MB','3.5','SATA 6 Gb/s','2','99.29','/images/storage/41rL7e5+51L.jpg');
INSERT INTO storage_table(name,capacity,price_pergb,type,cache,form_factor,interface,rating,price,image) VALUES('Seagate SkyHawk','6 TB','$0.038',' 	5900RPM','256 MB','3.5','SATA 6 Gb/s','2','229.49','/images/storage/37c34a11b30c618f60cdf802be3926dd.256p.jpg');
INSERT INTO storage_table(name,capacity,price_pergb,type,cache,form_factor,interface,rating,price,image) VALUES('ADATA Ultimate SU650','120 GB','$0.207','SSD','-','2.5','SATA 6 Gb/s','3','24.49','/images/storage/c5ed54671d75778537dad355e1fff529.256p.jpg');
INSERT INTO storage_table(name,capacity,price_pergb,type,cache,form_factor,interface,rating,price,image) VALUES('Team MS30','1 TB','$0.081','SSD','-','M.2-2280',' 	M.2 (B+M)','4','80.99','/images/storage/6c56efb792800668ebdf88501040055a.256p.jpg');



INSERT INTO cases_table(name,type,color,side_panel_window,internal_bays,rating,price,image) VALUES('NZXT H510','ATX Mid Tower','White','Tempered Glass','2','5','69.98','/images/cases/604fef5ac9874dffa927a3db98c1188d.256p.jpg');
INSERT INTO cases_table(name,type,color,side_panel_window,internal_bays,rating,price,image) VALUES('Phanteks Eclipse P300A Mesh','ATX Mid Tower','Black','Tempered Glass','2','4','56.98','/images/cases/7c9e187b65ab4b281bc2ca0fe41a9aa7.256p.jpg');
INSERT INTO cases_table(name,type,color,side_panel_window,internal_bays,rating,price,image) VALUES('Cooler Master MasterBox Q300L','MicroATX Mini Tower','Black','Acrylic','1','4','44.49','/images/cases/ec48e16ee4d6629045cfc4d71c649746.256p.jpg');
INSERT INTO cases_table(name,type,color,side_panel_window,internal_bays,rating,price,image) VALUES('Lian Li PC-O11 Dynamic','ATX Full Tower','Black','Tempered Glass','2','5','139.99','/images/cases/1e42c74f4d4dd535364465ca3f3a4d83.256p.jpg');
INSERT INTO cases_table(name,type,color,side_panel_window,internal_bays,rating,price,image) VALUES('DIYPC Solo-T2-R Black USB 3.0','ATX Mid Tower','Black / Red','None','0','2','27.99','/images/cases/c38b106bb3e84db6d611e608dd715087.256p.jpg');
INSERT INTO cases_table(name,type,color,side_panel_window,internal_bays,rating,price,image) VALUES('MSI MAG FORGE 100R','ATX Mid Tower','Black','Tempered Glass','1','2','66.98','/images/cases/4145e426378c801cc80da05d9ec6e8bf.256p.jpg');
INSERT INTO cases_table(name,type,color,side_panel_window,internal_bays,rating,price,image) VALUES('darkFlash DLM 21','MicroATX Mid Tower','White','Tempered Glass','2','5','49.99','/images/cases/413i8fY1KKL.jpg');
INSERT INTO cases_table(name,type,color,side_panel_window,internal_bays,rating,price,image) VALUES('Corsair iCUE 4000X RGB','ATX Mid Tower','Black','Tempered Glass','2','5','199.99','/images/cases/0610d363ccccf52837f07d811e4eb2a3.256p.jpg');


INSERT INTO power_supply_table(name,form_factor,efficiency_rating,wattage,modular,color,rating,price,image) VALUES('Corsair RM (2019)','ATX','80+ Gold','750 W','Full','Black','5','124.99','/images/power/02951377c9eed1e21fc3d8ba6092717e.256p.jpg');
INSERT INTO power_supply_table(name,form_factor,efficiency_rating,wattage,modular,color,rating,price,image) VALUES('EVGA BR','ATX','80+ Bronze','500 W','No','-','5','64.94','/images/power/b624497b6d3a1589cfc26c69467f05c8.256p.jpg');
INSERT INTO power_supply_table(name,form_factor,efficiency_rating,wattage,modular,color,rating,price,image) VALUES('Corsair CXM','ATX','80+ Bronze','650 W','Semi','-','5','94.94','/images/power/097e4a536e42595ca4c7ded7f7739bd4.256p.jpg');
INSERT INTO power_supply_table(name,form_factor,efficiency_rating,wattage,modular,color,rating,price,image) VALUES('Corsair AXi','ATX','80+ Titanium','1600 W','Full','-','5','599.99','/images/power/1d57cf53a1289e4dfff1aed9b1cc272a.256p.jpg');
INSERT INTO power_supply_table(name,form_factor,efficiency_rating,wattage,modular,color,rating,price,image) VALUES('CoolMax I-500','ATX','-','500 W','No','-','2','23.06','/images/power/c8f6598e0011fc5c5d5dcc03a67ceca9.256p.jpg');
INSERT INTO power_supply_table(name,form_factor,efficiency_rating,wattage,modular,color,rating,price,image) VALUES('In Win PB','ATX','80+ Gold','750 W','Full','-','2','150.00','/images/power/67a851547b18479d41253bf862deb3e2.256p.jpg');
INSERT INTO power_supply_table(name,form_factor,efficiency_rating,wattage,modular,color,rating,price,image) VALUES('Silverstone Essential','ATX','80+ Bronze','550 W','No','Black','3','55.99','/images/power/8e362f9250f1d0c8a620e58dc740c14a.256p.jpg');
INSERT INTO power_supply_table(name,form_factor,efficiency_rating,wattage,modular,color,rating,price,image) VALUES('Apevia Prestige','ATX','80+ Gold','800 W','No','Black','4','66.98','/images/power/41d0Q-MmxhL.jpg');


INSERT INTO cooler_table(name,fan_rpm,noise_level,color,radiator_size,rating,price,image) VALUES('Cooler Master Hyper 212 EVO','600 - 2000 RPM','9 - 36 dB', '-', '-','5','24.99','/images/cooler/ddea57de9797549e80d05fb3acb2e83d.med.256p.jpg');
INSERT INTO cooler_table(name,fan_rpm,noise_level,color,radiator_size,rating,price,image) VALUES('Corsair H100i RGB PLATINUM','2400 RPM','37 dB','Black / Silver','240 mm','5','159.49','/images/cooler/623066a73a9f4feafdea3ae659f80705.256p.jpg');
INSERT INTO cooler_table(name,fan_rpm,noise_level,color,radiator_size,rating,price,image) VALUES('Cooler Master Hyper 212 RGB Black Edition','650 - 2000 RPM','8 - 30 dB','Black','-','5','34.00','/images/cooler/51XdFIoS4DL.jpg');
INSERT INTO cooler_table(name,fan_rpm,noise_level,color,radiator_size,rating,price,image) VALUES('NZXT Kraken X53','500 - 2000 RPM','21 - 38 dB','Black','240 mm','5','119.99','/images/cooler/098f91f23535f45875611413e7b892d6.256p.jpg');
INSERT INTO cooler_table(name,fan_rpm,noise_level,color,radiator_size,rating,price,image) VALUES('Cooler Master MASTERLIQUID ML240L RGB V2','650 - 1800 RPM','6 - 27 dB','Black','240 mm','5','79.99','/images/cooler/5b6a5e7f4cf456ccf6415235cf7adc99.256p.jpg');
INSERT INTO cooler_table(name,fan_rpm,noise_level,color,radiator_size,rating,price,image) VALUES('Noctua NH-D15','300 - 1500 RPM','21 - 36 dB','Black','360 mm','5','89.99','/images/cooler/ca16d42d3e187f96c728c09183df14a7.med.256p.jpg');
INSERT INTO cooler_table(name,fan_rpm,noise_level,color,radiator_size,rating,price,image) VALUES('upHere CCF150ARGB','600 - 1800 RPM','16.1 - 27.7 dB','Black','-','2','37.99','/images/cooler/51tr-HmfMUL.jpg');
INSERT INTO cooler_table(name,fan_rpm,noise_level,color,radiator_size,rating,price,image) VALUES('Thermaltake UX200 ARGB','300 - 1500 RPM','26.33 dB','Black','-','3','39.99','/images/cooler/1d87a6d070c19217787815a75d76c8bd.256p.jpg');


select * from public.cpu_table;
select * from public.cooler_table;
select * from motherboards_table;
select * from gpu_table;
select * from memory_table;
select * from storage_table;
select * from power_supply_table;
select * from cases_table;
