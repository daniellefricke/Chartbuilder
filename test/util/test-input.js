var init_data_ordinal = [
	"names\tApples\tOranges",
	"juicyness\t5.5\t23",
	"color\t14\t10",
	"flavor\t6.1\t13",
	"travelability\t0\t7",
].join("\n");

// A CSV, for testing
var init_data_ordinal_multiple = [
	"names,Apples,Oranges,Bananas,Kiwi,Strawberry,Mango",
	"travelability,96,34,2,45,1,21",
	"juicyness,12,65,95,26,81,41",
	"flavor,15,28,74,86,62,9",
	"color,51,70,26,35,7,1",
	"nutrition,60,12,39,38,75,13",
	"availability,27,97,57,1,99,69",
	"price,91,85,58,34,44,37"
].join("\n");

var init_data_ordinal_single = [
	"names\tApples",
	"juicyness\t5.5",
	"color\t14",
	"flavor\t6.1",
	"travelability\t0"
].join("\n");

var init_data_linear = [
	"value	foo",
	"1	$6,530",
	"2	$8,711",
	"3	$7,907",
	"4	$9,507",
	"5	$9,293",
	"6	$13,865",
	"7	$15,779",
	"8	$9,360",
	"9	$8,000"
].join("\n");

var init_data_time = [
	"Date	End of month	3-month moving average",
	"10/31/1984	886.79	749.9866667",
	"11/30/1984	754.62	911.4266667",
	"12/31/1984	1145.27	928.8933333",
	"1/31/1985	124.27	674.72",
	"2/28/1985	604.22	624.5866667",
	"3/29/1985	830.07	519.52",
	"4/30/1985	827.22	753.8366667",
	"5/31/1985	849.23	835.5066667",
	"6/28/1985	1255.53	977.3266667",
	"7/31/1985	1126.16	1076.973333",
	"8/30/1985	830.8	1070.83",
	"9/30/1985	1099.81	1018.923333",
	"10/31/1985	974.21	968.2733333",
	"11/29/1985	1001.55	1025.19",
	"12/31/1985	1347.67	1107.81",
	"1/31/1986	380.06	909.76",
	"2/28/1986	758.49	828.74",
	"3/31/1986	1200.7	779.75",
	"4/30/1986	1225	1061.396667",
	"5/30/1986	1253.01	1226.236667",
	"6/30/1986	1241.87	1239.96",
	"7/31/1986	1330.57	1275.15",
	"8/29/1986	1158.96	1243.8",
	"9/30/1986	1384.76	1291.43",
	"10/31/1986	1198.54	1247.42",
	"11/28/1986	1187.18	1256.826667",
	"12/31/1986	1419.85	1268.523333",
	"1/30/1987	676.76	1094.596667",
	"2/27/1987	1090.47	1062.36",
	"3/31/1987	1234.7	1000.643333",
	"4/30/1987	1104.76	1143.31",
	"5/29/1987	899.15	1079.536667",
	"6/30/1987	942.46	982.1233333",
	"7/31/1987	1027.03	956.2133333",
	"8/31/1987	776.25	915.2466667",
	"9/30/1987	1060.22	954.5",
	"10/30/1987	980.83	939.1",
	"11/30/1987	653.56	898.2033333",
	"12/31/1987	1132.1	922.1633333",
	"1/29/1988	391.45	725.7033333",
	"2/29/1988	675.29	732.9466667",
	"3/31/1988	958.55	675.0966667",
	"4/29/1988	853.64	829.16",
	"5/31/1988	646.95	819.7133333",
	"6/30/1988	745.07	748.5533333",
	"7/29/1988	941.39	777.8033333",
	"8/31/1988	662.15	782.87",
	"9/30/1988	1040.52	881.3533333",
	"10/31/1988	1005.65	902.7733333",
	"11/30/1988	821.41	955.86",
	"12/30/1988	1190.8	1005.953333",
	"1/31/1989	412.48	808.23",
	"2/28/1989	929.26	844.18",
	"3/31/1989	847.43	729.7233333",
	"4/28/1989	962.82	913.17",
	"5/31/1989	506.78	772.3433333",
	"6/30/1989	755.23	741.61",
	"7/31/1989	847.49	703.1666667",
	"8/31/1989	471.85	691.5233333",
	"9/29/1989	1043.84	787.7266667",
	"10/31/1989	667.51	727.7333333",
	"11/30/1989	504.38	738.5766667",
	"12/29/1989	894.91	688.9333333",
	"1/31/1990	50.03	483.1066667",
	"2/28/1990	721.08	555.34",
	"3/30/1990	1052.92	608.01",
	"4/30/1990	556.85	776.95",
	"5/31/1990	480.52	696.7633333",
	"6/29/1990	1019.66	685.6766667",
	"7/31/1990	803.1	767.76",
	"8/31/1990	509.3	777.3533333",
	"9/28/1990	974.91	762.4366667",
	"10/31/1990	430.05	638.0866667",
	"11/30/1990	287.04	564",
	"12/31/1990	716.3	477.7966667",
	"1/31/1991	123.9	375.7466667",
	"2/28/1991	662.02	500.74",
	"3/29/1991	1140.23	642.05",
	"4/30/1991	866.2	889.4833333",
	"5/31/1991	575.26	860.5633333",
	"6/28/1991	1008.87	816.7766667",
	"7/31/1991	914.69	832.94",
	"8/30/1991	780.96	901.5066667",
	"9/30/1991	1311.71	1002.453333",
	"10/31/1991	948.65	1013.773333",
	"11/29/1991	835.4	1031.92",
	"12/31/1991	1291.86	1025.303333",
	"1/31/1992	475.09	867.45",
	"2/28/1992	1280.71	1015.886667",
	"3/31/1992	1436.77	1064.19",
	"4/30/1992	947.47	1221.65",
	"5/29/1992	1021.03	1135.09",
	"6/30/1992	1143.61	1037.37",
	"7/31/1992	1158.45	1107.696667",
	"8/31/1992	889.23	1063.763333"
].join('\n');

var init_data_time_single = [
	"Date	End of month",
	"10/31/1984	886.79",
	"11/30/1984	754.62",
	"12/31/1984	1145.27",
	"1/31/1985	124.27",
	"2/28/1985	604.22",
	"3/29/1985	830.07",
	"4/30/1985	827.22",
	"5/31/1985	849.23",
	"6/28/1985	1255.53",
	"7/31/1985	1126.16",
	"8/30/1985	830.8",
	"9/30/1985	1099.81",
	"10/31/1985	974.21",
	"11/29/1985	1001.55",
	"12/31/1985	1347.67",
	"1/31/1986	380.06",
	"2/28/1986	758.49",
	"3/31/1986	1200.7",
	"4/30/1986	1225",
	"5/30/1986	1253.01",
	"6/30/1986	1241.87",
	"7/31/1986	1330.57",
	"8/29/1986	1158.96",
	"9/30/1986	1384.76",
	"10/31/1986	1198.54",
	"11/28/1986	1187.18",
	"12/31/1986	1419.85",
	"1/30/1987	676.76",
	"2/27/1987	1090.47",
	"3/31/1987	1234.7",
	"4/30/1987	1104.76",
	"5/29/1987	899.15",
	"6/30/1987	942.46",
	"7/31/1987	1027.03",
	"8/31/1987	776.25",
	"9/30/1987	1060.22",
	"10/30/1987	980.83",
	"11/30/1987	653.56",
	"12/31/1987	1132.1",
	"1/29/1988	391.45",
	"2/29/1988	675.29",
	"3/31/1988	958.55",
	"4/29/1988	853.64",
	"5/31/1988	646.95",
	"6/30/1988	745.07",
	"7/29/1988	941.39",
	"8/31/1988	662.15",
	"9/30/1988	1040.52",
	"10/31/1988	1005.65",
	"11/30/1988	821.41",
	"12/30/1988	1190.8",
	"1/31/1989	412.48",
	"2/28/1989	929.26",
	"3/31/1989	847.43",
	"4/28/1989	962.82",
	"5/31/1989	506.78",
	"6/30/1989	755.23",
	"7/31/1989	847.49",
	"8/31/1989	471.85",
	"9/29/1989	1043.84",
	"10/31/1989	667.51",
	"11/30/1989	504.38",
	"12/29/1989	894.91",
	"1/31/1990	50.03",
	"2/28/1990	721.08",
	"3/30/1990	1052.92",
	"4/30/1990	556.85",
	"5/31/1990	480.52",
	"6/29/1990	1019.66",
	"7/31/1990	803.1",
	"8/31/1990	509.3",
	"9/28/1990	974.91",
	"10/31/1990	430.05",
	"11/30/1990	287.04	564",
	"12/31/1990	716.3",
	"1/31/1991	123.9",
	"2/28/1991	662.02",
	"3/29/1991	1140.23",
	"4/30/1991	866.2",
	"5/31/1991	575.26",
	"6/28/1991	1008.87",
	"7/31/1991	914.69",
	"8/30/1991	780.96",
	"9/30/1991	1311.71",
	"10/31/1991	948.65",
	"11/29/1991	835.4",
	"12/31/1991	1291.86",
	"1/31/1992	475.09",
	"2/28/1992	1280.71",
	"3/31/1992	1436.77",
	"4/30/1992	947.47",
	"5/29/1992	1021.03",
	"6/30/1992	1143.61",
	"7/31/1992	1158.45",
	"8/31/1992	889.23"
].join('\n');

var init_data_time_multiple = [
	"Date	S&P 500	McDonald's	Burger King	Jack in the Box	Chipotle",
	"8/16/2012	0.71	-0.4	-2.08	-0.19	0.61",
	"8/17/2012	0.9	-0.51	-0.69	1.54	0.38",
	"8/20/2012	0.89	0.41	-0.14	-0.42	0.34",
	"8/21/2012	0.54	0.81	0.07	-0.12	-0.34",
	"8/22/2012	0.56	0.84	-0.9	-0.31	-0.33",
	"8/23/2012	-0.27	0.5	-2.22	-0.81	-2.01",
	"8/24/2012	0.38	1.26	-2.92	-1.85	-1",
	"8/27/2012	0.33	1.97	-2.85	0.15	-1.69",
	"8/28/2012	0.25	1.51	-4.72	0.12	-1.31",
	"8/29/2012	0.33	2.1	-5.42	0.65	-1.59",
	"8/30/2012	-0.45	1.01	-9.31	0.73	-2.67"
].join('\n');

var init_data_intraday_single = [
	"date	IBM",
	"4/1/2015 16:03:59	159.18",
	"4/1/2015 16:02:59	159.14",
	"4/1/2015 16:01:59	159.14",
	"4/1/2015 16:00:59	159.14",
	"4/1/2015 15:59:59	159.17",
	"4/1/2015 15:58:59	159.02",
	"4/1/2015 15:57:59	159.01",
	"4/1/2015 15:56:59	159",
	"4/1/2015 15:55:59	158.99",
	"4/1/2015 15:54:59	158.83",
	"4/1/2015 15:53:59	158.88",
	"4/1/2015 15:52:59	158.93",
	"4/1/2015 15:51:59	158.9",
	"4/1/2015 15:50:59	158.92",
	"4/1/2015 15:49:59	158.84",
	"4/1/2015 15:48:59	158.93",
	"4/1/2015 15:47:59	158.94",
	"4/1/2015 15:46:59	158.85",
	"4/1/2015 15:45:59	158.74",
	"4/1/2015 15:44:59	158.76",
	"4/1/2015 15:43:59	158.765",
	"4/1/2015 15:42:59	158.888",
	"4/1/2015 15:41:59	158.93",
	"4/1/2015 15:40:59	159.07",
	"4/1/2015 15:39:59	159.05",
	"4/1/2015 15:38:59	159.04",
	"4/1/2015 15:37:59	159.06",
	"4/1/2015 15:36:59	159.08",
	"4/1/2015 15:35:59	159.17",
	"4/1/2015 15:34:59	158.9",
	"4/1/2015 15:33:59	158.801",
	"4/1/2015 15:32:59	158.77",
	"4/1/2015 15:31:59	158.88",
	"4/1/2015 15:30:59	158.9",
	"4/1/2015 15:29:59	158.9",
	"4/1/2015 15:28:59	158.89",
	"4/1/2015 15:27:59	158.84",
	"4/1/2015 15:26:59	158.88",
	"4/1/2015 15:25:59	158.97",
	"4/1/2015 15:24:59	158.96",
	"4/1/2015 15:23:59	158.87",
	"4/1/2015 15:22:59	158.81",
	"4/1/2015 15:21:59	158.83",
	"4/1/2015 15:20:59	158.74",
	"4/1/2015 15:19:59	158.66",
	"4/1/2015 15:18:59	158.63",
	"4/1/2015 15:17:59	158.75",
	"4/1/2015 15:16:59	158.61",
	"4/1/2015 15:15:59	158.74",
	"4/1/2015 15:14:59	158.735",
	"4/1/2015 15:13:59	158.835",
	"4/1/2015 15:12:59	158.76",
	"4/1/2015 15:11:59	158.6",
	"4/1/2015 15:10:59	158.56",
	"4/1/2015 15:09:59	158.54",
	"4/1/2015 15:08:59	158.44",
	"4/1/2015 15:07:59	158.53",
	"4/1/2015 15:06:59	158.52",
	"4/1/2015 15:05:59	158.63",
	"4/1/2015 15:04:59	158.68",
	"4/1/2015 15:03:59	158.67",
	"4/1/2015 15:02:59	158.56",
	"4/1/2015 15:01:59	158.62",
	"4/1/2015 15:00:59	158.73",
	"4/1/2015 14:59:59	158.741",
	"4/1/2015 14:58:59	158.85",
	"4/1/2015 14:57:59	158.85",
	"4/1/2015 14:56:59	158.85",
	"4/1/2015 14:55:59	158.85",
	"4/1/2015 14:54:59	158.78",
	"4/1/2015 14:53:59	158.83",
	"4/1/2015 14:52:59	158.78",
	"4/1/2015 14:51:59	158.773",
	"4/1/2015 14:50:59	158.79",
	"4/1/2015 14:49:59	158.85",
	"4/1/2015 14:48:59	158.83",
	"4/1/2015 14:47:59	158.67",
	"4/1/2015 14:46:59	158.65",
	"4/1/2015 14:45:59	158.55",
	"4/1/2015 14:44:59	158.518",
	"4/1/2015 14:43:59	158.53",
	"4/1/2015 14:42:59	158.48",
	"4/1/2015 14:41:59	158.46",
	"4/1/2015 14:40:59	158.53",
	"4/1/2015 14:39:59	158.61",
	"4/1/2015 14:38:59	158.485",
	"4/1/2015 14:37:59	158.43",
	"4/1/2015 14:36:59	158.45",
	"4/1/2015 14:35:59	158.505",
	"4/1/2015 14:34:59	158.49",
	"4/1/2015 14:33:59	158.42",
	"4/1/2015 14:32:59	158.41",
	"4/1/2015 14:31:59	158.45",
	"4/1/2015 14:30:59	158.495",
	"4/1/2015 14:29:59	158.5",
	"4/1/2015 14:28:59	158.56",
	"4/1/2015 14:27:59	158.64",
	"4/1/2015 14:26:59	158.6",
	"4/1/2015 14:25:59	158.55",
	"4/1/2015 14:24:59	158.65",
	"4/1/2015 14:23:59	158.728",
	"4/1/2015 14:22:59	158.725",
	"4/1/2015 14:21:59	158.74",
	"4/1/2015 14:20:59	158.62",
	"4/1/2015 14:19:59	158.6",
	"4/1/2015 14:18:59	158.622",
	"4/1/2015 14:17:59	158.54",
	"4/1/2015 14:16:59	158.62",
	"4/1/2015 14:15:59	158.64",
	"4/1/2015 14:14:59	158.64",
	"4/1/2015 14:13:59	158.75",
	"4/1/2015 14:12:59	159.01",
	"4/1/2015 14:11:59	159.01",
	"4/1/2015 14:10:59	158.94",
	"4/1/2015 14:09:59	158.92",
	"4/1/2015 14:08:59	158.94",
	"4/1/2015 14:07:59	158.94",
	"4/1/2015 14:06:59	159.02",
	"4/1/2015 14:05:59	158.98",
	"4/1/2015 14:04:59	159",
	"4/1/2015 14:03:59	159",
	"4/1/2015 14:02:59	159.056",
	"4/1/2015 14:01:59	159.1",
	"4/1/2015 14:00:59	159.08",
	"4/1/2015 13:59:59	159.065",
	"4/1/2015 13:58:59	159.04",
	"4/1/2015 13:57:59	159.16",
	"4/1/2015 13:56:59	159.3",
	"4/1/2015 13:55:59	159.27",
	"4/1/2015 13:54:59	159.16",
	"4/1/2015 13:53:59	159.13",
	"4/1/2015 13:52:59	159.13",
	"4/1/2015 13:51:59	159.15",
	"4/1/2015 13:50:59	159.12",
	"4/1/2015 13:49:59	159.08",
	"4/1/2015 13:48:59	159.03",
	"4/1/2015 13:47:59	159.005",
	"4/1/2015 13:46:59	159.07",
	"4/1/2015 13:45:59	159.08",
	"4/1/2015 13:44:59	159.207",
	"4/1/2015 13:43:59	159.29",
	"4/1/2015 13:42:59	159.17",
	"4/1/2015 13:41:59	159.11",
	"4/1/2015 13:40:59	159.03",
	"4/1/2015 13:39:59	158.99",
	"4/1/2015 13:38:59	159.01",
	"4/1/2015 13:37:59	159.06",
	"4/1/2015 13:36:59	159.08",
	"4/1/2015 13:35:59	159.07",
	"4/1/2015 13:34:59	159.07",
	"4/1/2015 13:33:59	159.185",
	"4/1/2015 13:32:59	159.09",
	"4/1/2015 13:31:59	159.013",
	"4/1/2015 13:30:59	159.095",
	"4/1/2015 13:29:59	159.04",
	"4/1/2015 13:28:59	159.04",
	"4/1/2015 13:27:59	158.99",
	"4/1/2015 13:26:59	159.01",
	"4/1/2015 13:25:59	158.99",
	"4/1/2015 13:24:59	159.06",
	"4/1/2015 13:23:59	159",
	"4/1/2015 13:22:59	158.97",
	"4/1/2015 13:21:59	159.105",
	"4/1/2015 13:20:59	159.065",
	"4/1/2015 13:19:59	159.07",
	"4/1/2015 13:18:59	159.06",
	"4/1/2015 13:17:59	159.05",
	"4/1/2015 13:16:59	159.06",
	"4/1/2015 13:15:59	159.02",
	"4/1/2015 13:14:59	159.03",
	"4/1/2015 13:13:59	159.04",
	"4/1/2015 13:12:59	159.05",
	"4/1/2015 13:11:59	158.984",
	"4/1/2015 13:10:59	158.98",
	"4/1/2015 13:09:59	158.89",
	"4/1/2015 13:08:59	158.83",
	"4/1/2015 13:07:59	158.78",
	"4/1/2015 13:06:59	158.79",
	"4/1/2015 13:05:59	158.78",
	"4/1/2015 13:04:59	158.79",
	"4/1/2015 13:03:59	158.76",
	"4/1/2015 13:02:59	158.88",
	"4/1/2015 13:01:59	158.88",
	"4/1/2015 13:00:59	158.91",
	"4/1/2015 12:59:59	158.98",
	"4/1/2015 12:58:59	159.03",
	"4/1/2015 12:57:59	159.03",
	"4/1/2015 12:56:59	159.01",
	"4/1/2015 12:55:59	159",
	"4/1/2015 12:54:59	158.99",
	"4/1/2015 12:53:59	159.01",
	"4/1/2015 12:52:59	158.81",
	"4/1/2015 12:51:59	158.78",
	"4/1/2015 12:50:59	158.81",
	"4/1/2015 12:49:59	158.75",
	"4/1/2015 12:48:59	158.75",
	"4/1/2015 12:47:59	158.799",
	"4/1/2015 12:46:59	158.85",
	"4/1/2015 12:45:59	158.97",
	"4/1/2015 12:44:59	159.02",
	"4/1/2015 12:43:59	159.02",
	"4/1/2015 12:42:59	159.105",
	"4/1/2015 12:41:59	159.113",
	"4/1/2015 12:40:59	159.03",
	"4/1/2015 12:39:59	158.94",
	"4/1/2015 12:38:59	158.9",
	"4/1/2015 12:37:59	158.95",
	"4/1/2015 12:36:59	158.9",
	"4/1/2015 12:35:59	158.94",
	"4/1/2015 12:34:59	158.94",
	"4/1/2015 12:33:59	158.88",
	"4/1/2015 12:32:59	158.79",
	"4/1/2015 12:31:59	158.855",
	"4/1/2015 12:30:59	158.78",
	"4/1/2015 12:29:59	158.78",
	"4/1/2015 12:28:59	158.82",
	"4/1/2015 12:27:59	158.82",
	"4/1/2015 12:26:59	158.775",
	"4/1/2015 12:25:59	158.78",
	"4/1/2015 12:24:59	158.73",
	"4/1/2015 12:23:59	158.68",
	"4/1/2015 12:22:59	158.67",
	"4/1/2015 12:21:59	158.62",
	"4/1/2015 12:20:59	158.64",
	"4/1/2015 12:19:59	158.63",
	"4/1/2015 12:18:59	158.66",
	"4/1/2015 12:17:59	158.62",
	"4/1/2015 12:16:59	158.603",
	"4/1/2015 12:15:59	158.522",
	"4/1/2015 12:14:59	158.59",
	"4/1/2015 12:13:59	158.59",
	"4/1/2015 12:12:59	158.625",
	"4/1/2015 12:11:59	158.62",
	"4/1/2015 12:10:59	158.78",
	"4/1/2015 12:09:59	158.75",
	"4/1/2015 12:08:59	158.74",
	"4/1/2015 12:07:59	158.72",
	"4/1/2015 12:06:59	158.735",
	"4/1/2015 12:05:59	158.68",
	"4/1/2015 12:04:59	158.7",
	"4/1/2015 12:03:59	158.74",
	"4/1/2015 12:02:59	158.76",
	"4/1/2015 12:01:59	158.75",
	"4/1/2015 12:00:59	158.77",
	"4/1/2015 11:59:59	158.748",
	"4/1/2015 11:58:59	158.887",
	"4/1/2015 11:57:59	158.93",
	"4/1/2015 11:56:59	158.89",
	"4/1/2015 11:55:59	158.95",
	"4/1/2015 11:54:59	158.97",
	"4/1/2015 11:53:59	158.99",
	"4/1/2015 11:52:59	158.972",
	"4/1/2015 11:51:59	159.06",
	"4/1/2015 11:50:59	159.15",
	"4/1/2015 11:49:59	159.13",
	"4/1/2015 11:48:59	159.21",
	"4/1/2015 11:47:59	159.13",
	"4/1/2015 11:46:59	159.05",
	"4/1/2015 11:45:59	159.04",
	"4/1/2015 11:44:59	159.08",
	"4/1/2015 11:43:59	158.92",
	"4/1/2015 11:42:59	158.86",
	"4/1/2015 11:41:59	158.753",
	"4/1/2015 11:40:59	158.855",
	"4/1/2015 11:39:59	158.92",
	"4/1/2015 11:38:59	159.12",
	"4/1/2015 11:37:59	159.25",
	"4/1/2015 11:36:59	159.28",
	"4/1/2015 11:35:59	159.225",
	"4/1/2015 11:34:59	159.1",
	"4/1/2015 11:33:59	159.15",
	"4/1/2015 11:32:59	159.14",
	"4/1/2015 11:31:59	159.18",
	"4/1/2015 11:30:59	159.35",
	"4/1/2015 11:29:59	159.31",
	"4/1/2015 11:28:59	159.19",
	"4/1/2015 11:27:59	159.27",
	"4/1/2015 11:26:59	159.31",
	"4/1/2015 11:25:59	159.28",
	"4/1/2015 11:24:59	159.33",
	"4/1/2015 11:23:59	159.416",
	"4/1/2015 11:22:59	159.381",
	"4/1/2015 11:21:59	159.53",
	"4/1/2015 11:20:59	159.69",
	"4/1/2015 11:19:59	159.67",
	"4/1/2015 11:18:59	159.64",
	"4/1/2015 11:17:59	159.71",
	"4/1/2015 11:16:59	159.79",
	"4/1/2015 11:15:59	159.775",
	"4/1/2015 11:14:59	159.835",
	"4/1/2015 11:13:59	159.775",
	"4/1/2015 11:12:59	159.72",
	"4/1/2015 11:11:59	159.68",
	"4/1/2015 11:10:59	159.63",
	"4/1/2015 11:09:59	159.68",
	"4/1/2015 11:08:59	159.58",
	"4/1/2015 11:07:59	159.48",
	"4/1/2015 11:06:59	159.53",
	"4/1/2015 11:05:59	159.53",
	"4/1/2015 11:04:59	159.49",
	"4/1/2015 11:03:59	159.476",
	"4/1/2015 11:02:59	159.55",
	"4/1/2015 11:01:59	159.38",
	"4/1/2015 11:00:59	159.5",
	"4/1/2015 10:59:59	159.464",
	"4/1/2015 10:58:59	159.58",
	"4/1/2015 10:57:59	159.52",
	"4/1/2015 10:56:59	159.49",
	"4/1/2015 10:55:59	159.452",
	"4/1/2015 10:54:59	159.45",
	"4/1/2015 10:53:59	159.41",
	"4/1/2015 10:52:59	159.37",
	"4/1/2015 10:51:59	159.4",
	"4/1/2015 10:50:59	159.473",
	"4/1/2015 10:49:59	159.19",
	"4/1/2015 10:48:59	159.08",
	"4/1/2015 10:47:59	159.042",
	"4/1/2015 10:46:59	158.93",
	"4/1/2015 10:45:59	159",
	"4/1/2015 10:44:59	158.91",
	"4/1/2015 10:43:59	158.916",
	"4/1/2015 10:42:59	158.91",
	"4/1/2015 10:41:59	159",
	"4/1/2015 10:40:59	158.87",
	"4/1/2015 10:39:59	158.7",
	"4/1/2015 10:38:59	158.65",
	"4/1/2015 10:37:59	158.55",
	"4/1/2015 10:36:59	158.67",
	"4/1/2015 10:35:59	158.66",
	"4/1/2015 10:34:59	158.71",
	"4/1/2015 10:33:59	158.68",
	"4/1/2015 10:32:59	158.86",
	"4/1/2015 10:31:59	158.8",
	"4/1/2015 10:30:59	158.822",
	"4/1/2015 10:29:59	158.76",
	"4/1/2015 10:28:59	158.84",
	"4/1/2015 10:27:59	158.89",
	"4/1/2015 10:26:59	158.9",
	"4/1/2015 10:25:59	159.005",
	"4/1/2015 10:24:59	158.72",
	"4/1/2015 10:23:59	158.709",
	"4/1/2015 10:22:59	158.77",
	"4/1/2015 10:21:59	158.83",
	"4/1/2015 10:20:59	158.82",
	"4/1/2015 10:19:59	158.7",
	"4/1/2015 10:18:59	158.753",
	"4/1/2015 10:17:59	158.77",
	"4/1/2015 10:16:59	158.8",
	"4/1/2015 10:15:59	158.668",
	"4/1/2015 10:14:59	158.66",
	"4/1/2015 10:13:59	158.59",
	"4/1/2015 10:12:59	158.59",
	"4/1/2015 10:11:59	158.51",
	"4/1/2015 10:10:59	158.55",
	"4/1/2015 10:09:59	158.53",
	"4/1/2015 10:08:59	158.59",
	"4/1/2015 10:07:59	158.6",
	"4/1/2015 10:06:59	158.6",
	"4/1/2015 10:05:59	158.57",
	"4/1/2015 10:04:59	158.728",
	"4/1/2015 10:03:59	158.75",
	"4/1/2015 10:02:59	158.74",
	"4/1/2015 10:01:59	158.69",
	"4/1/2015 10:00:59	158.53",
	"4/1/2015 9:59:59	158.6",
	"4/1/2015 9:58:59	158.65",
	"4/1/2015 9:57:59	158.708",
	"4/1/2015 9:56:59	158.71",
	"4/1/2015 9:55:59	158.73",
	"4/1/2015 9:54:59	158.73",
	"4/1/2015 9:53:59	159.01",
	"4/1/2015 9:52:59	159.148",
	"4/1/2015 9:51:59	159.09",
	"4/1/2015 9:50:59	159.15",
	"4/1/2015 9:49:59	159.11",
	"4/1/2015 9:48:59	159.36",
	"4/1/2015 9:47:59	159.445",
	"4/1/2015 9:46:59	159.6",
	"4/1/2015 9:45:59	159.44",
	"4/1/2015 9:44:59	159.45",
	"4/1/2015 9:43:59	159.58",
	"4/1/2015 9:42:59	159.7",
	"4/1/2015 9:41:59	159.66",
	"4/1/2015 9:40:59	159.505",
	"4/1/2015 9:39:59	159.71",
	"4/1/2015 9:38:59	159.9",
	"4/1/2015 9:37:59	159.99",
	"4/1/2015 9:36:59	160",
	"4/1/2015 9:35:59	160.14",
	"4/1/2015 9:34:59	160.33",
	"4/1/2015 9:33:59	160.425",
	"4/1/2015 9:32:59	160.305",
	"4/1/2015 9:31:59	160.29",
	"4/1/2015 9:30:59	160.13",
].join("\n");

var init_data_comma = [
	"year	foo",
	"1989	$6,530",
	"1992	$8,711",
	"1995	$7,907",
	"1998	$9,507",
	"2001	$9,293",
	"2004	$13,865",
	"2007	$15,779",
	"2010	$9,360",
	"2013	$8,000"
].join("\n");

var uneven_series = [
	"Year	China	US",
	"2000	2.8	23.5",
	"2005	22	14.7",
	"2010	28	",
	"2015	25.4	"
].join("\n");

var too_many_series = [
	"Year	A	B	C	D	E	F	G	H	I	J	K	L	M	N",
	"2000	2.8	23.5	11.2	21.1	2.8	23.5	11.2	21.1	2.8	23.5	11.2	21.1	21.1	21.1",
	"2005	22	14.7	7.6	17.2	22	14.7	7.6	17.2	22	14.7	7.6	17.2	17.2	17.2",
	"2010	28	11.5	6.6	13.8	28	11.5	6.6	13.8	28	11.5	6.6	13.8	13.8	13.8",
	"2015	25.4	12.2	6.8	13.4	25.4	12.2	6.8	13.4	25.4	12.2	6.8	13.4	13.4	13.4"
].join("\n");

var too_few_series = [
	"China",
	"2.8",
	"22",
	"28",
	"25.42015",
].join("\n");

var nan_values = [
	"year	foo",
	"1989	$6,530",
	"1992	NOT_A_NUMBER",
	"1995	$7,907",
	"1998	$9,507",
	"2001	$9,293",
	"2004	$1,865",
	"2007	$1,779",
	"2010	$9,360",
	"2013	$8,000"
].join("\n");

var not_dates = [
	"year	foo",
	"NOT_A_DATE	$6,530",
	"1992	$8,711",
	"1995	$7,907",
	"1998	$9,507",
	"2001	$9,293",
	"2004	$1,865",
	"2007	$1,779",
	"2010	$9,360",
	"2013	$8,000"
].join("\n");

var large_numbers = [
	"year	foo",
	"1989	600,530",
	"1992	500,000",
	"1995	700,907",
	"1998	900,507",
	"2001	900,293",
	"2004	100,865",
	"2007	100,779",
	"2010	900,360",
	"2013	800,000"
].join("\n");

var multiple_errors = [
	"Year	China	US",
	"NOT_A_DATE	2.8	23.5",
	"2005	22	NOT_A_NUMBER",
	"2010	28	",
	"2015	25.4	"
].join("\n");

module.exports = {
	init_data_ordinal: init_data_ordinal,
	init_data_ordinal_multiple: init_data_ordinal_multiple,
	init_data_ordinal_single: init_data_ordinal_single,
	init_data_linear: init_data_linear,
	init_data_time: init_data_time,
	init_data_time_multiple: init_data_time_multiple,
	init_data_time_single: init_data_time_single,
	init_data_intraday_single: init_data_intraday_single,
	init_data_comma: init_data_comma,
	uneven_series: uneven_series,
	too_many_series: too_many_series,
	too_few_series: too_few_series,
	nan_values: nan_values,
	not_dates: not_dates,
	multiple_errors: multiple_errors,
	large_numbers: large_numbers
};
