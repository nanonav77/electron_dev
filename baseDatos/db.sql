-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: conaffex
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `colaborador_fex`
--

DROP TABLE IF EXISTS `colaborador_fex`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colaborador_fex` (
  `NUMERO` int NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(150) DEFAULT NULL,
  `IDENTIFICACION` int DEFAULT NULL,
  `TELEFONO` int DEFAULT NULL,
  `NUM_TARJETA` bigint DEFAULT NULL,
  `OBSERVACIONES` text,
  `TIPO` varchar(50) DEFAULT NULL,
  `GENERO` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`NUMERO`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colaborador_fex`
--

LOCK TABLES `colaborador_fex` WRITE;
/*!40000 ALTER TABLE `colaborador_fex` DISABLE KEYS */;
INSERT INTO `colaborador_fex` VALUES (1,'Daniel Navarro',0,85647898,1234123456789876,'eed','Nacional','Masculino'),(2,'Daniel Navarro',0,85647898,1234123456789876,'','Nacional','Masculino'),(3,'Daniel Navarro',0,85647898,1234123456789876,'','Nacional','Masculino'),(4,'Daniel Navarro',0,85647898,1234123456789876,'','Nacional','Masculino');
/*!40000 ALTER TABLE `colaborador_fex` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-06 20:10:05
