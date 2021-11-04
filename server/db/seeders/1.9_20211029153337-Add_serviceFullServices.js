const serviceFullServices = [
  // Almera (G15) ТО-1
  { FullServiceId: 1, ServiceId: 1 },
  { FullServiceId: 1, ServiceId: 2 },
  { FullServiceId: 1, ServiceId: 3 },
  { FullServiceId: 1, ServiceId: 4 },
  { FullServiceId: 1, ServiceId: 5 },
  { FullServiceId: 1, ServiceId: 6 },
  { FullServiceId: 1, ServiceId: 7 },
  { FullServiceId: 1, ServiceId: 8 },
  { FullServiceId: 1, ServiceId: 9 },
  // { FullServiceId: 1, ServiceId: 14 }, // Работа мастера

  // Almera (G15) ТО-2
  { FullServiceId: 2, ServiceId: 10 },
  { FullServiceId: 2, ServiceId: 1 },
  { FullServiceId: 2, ServiceId: 11 },
  { FullServiceId: 2, ServiceId: 2 },
  { FullServiceId: 2, ServiceId: 4 },
  { FullServiceId: 2, ServiceId: 13 },
  { FullServiceId: 2, ServiceId: 5 },
  { FullServiceId: 2, ServiceId: 12 },
  { FullServiceId: 2, ServiceId: 6 },
  { FullServiceId: 2, ServiceId: 7 },
  { FullServiceId: 2, ServiceId: 8 },
  { FullServiceId: 2, ServiceId: 9 },
  // { FullServiceId: 2, ServiceId: 15 }, // Работа мастера

  // Almera (G15) ТО-3
  { FullServiceId: 3, ServiceId: 1 },
  { FullServiceId: 3, ServiceId: 2 },
  { FullServiceId: 3, ServiceId: 3 },
  { FullServiceId: 3, ServiceId: 4 },
  { FullServiceId: 3, ServiceId: 5 },
  { FullServiceId: 3, ServiceId: 6 },
  { FullServiceId: 3, ServiceId: 7 },
  { FullServiceId: 3, ServiceId: 8 },
  { FullServiceId: 3, ServiceId: 9 },
  // { FullServiceId: 3, ServiceId: 14 }, // Работа мастера

  // Almera (G15) ТО-4
  { FullServiceId: 4, ServiceId: 10 },
  { FullServiceId: 4, ServiceId: 1 },
  { FullServiceId: 4, ServiceId: 11 },
  { FullServiceId: 4, ServiceId: 3 },
  { FullServiceId: 4, ServiceId: 4 },
  { FullServiceId: 4, ServiceId: 13 },
  { FullServiceId: 4, ServiceId: 5 },
  { FullServiceId: 4, ServiceId: 12 },
  { FullServiceId: 4, ServiceId: 6 },
  { FullServiceId: 4, ServiceId: 7 },
  { FullServiceId: 4, ServiceId: 8 },
  { FullServiceId: 4, ServiceId: 9 },
  // { FullServiceId: 4, ServiceId: 17 }, // Работа мастера

  // Almera (G15) ТО-5
  { FullServiceId: 5, ServiceId: 1 },
  { FullServiceId: 5, ServiceId: 2 },
  { FullServiceId: 5, ServiceId: 3 },
  { FullServiceId: 5, ServiceId: 4 },
  { FullServiceId: 5, ServiceId: 5 },
  { FullServiceId: 5, ServiceId: 6 },
  { FullServiceId: 5, ServiceId: 7 },
  { FullServiceId: 5, ServiceId: 8 },
  { FullServiceId: 5, ServiceId: 9 },
  // { FullServiceId: 5, ServiceId: 14 }, // Работа мастера

  // Almera (G15) ТО-6
  { FullServiceId: 6, ServiceId: 1 },
  { FullServiceId: 6, ServiceId: 11 },
  { FullServiceId: 6, ServiceId: 2 },
  { FullServiceId: 6, ServiceId: 3 },
  { FullServiceId: 6, ServiceId: 4 },
  { FullServiceId: 6, ServiceId: 13 },
  { FullServiceId: 6, ServiceId: 5 },
  { FullServiceId: 6, ServiceId: 12 },
  { FullServiceId: 6, ServiceId: 6 },
  { FullServiceId: 6, ServiceId: 7 },
  { FullServiceId: 6, ServiceId: 8 },
  { FullServiceId: 6, ServiceId: 9 },
  // { FullServiceId: 6, ServiceId: 16 }, // Работа мастера

  // Almera (G15) ТО-7
  { FullServiceId: 7, ServiceId: 1 },
  { FullServiceId: 7, ServiceId: 2 },
  { FullServiceId: 7, ServiceId: 3 },
  { FullServiceId: 7, ServiceId: 4 },
  { FullServiceId: 7, ServiceId: 5 },
  { FullServiceId: 7, ServiceId: 6 },
  { FullServiceId: 7, ServiceId: 7 },
  { FullServiceId: 7, ServiceId: 8 },
  { FullServiceId: 7, ServiceId: 9 },
  // { FullServiceId: 7, ServiceId: 14 }, // Работа мастера

  // Almera (G15) ТО-8
  { FullServiceId: 8, ServiceId: 10 },
  { FullServiceId: 8, ServiceId: 1 },
  { FullServiceId: 8, ServiceId: 11 },
  { FullServiceId: 8, ServiceId: 3 },
  { FullServiceId: 8, ServiceId: 4 },
  { FullServiceId: 8, ServiceId: 13 },
  { FullServiceId: 8, ServiceId: 5 },
  { FullServiceId: 8, ServiceId: 12 },
  { FullServiceId: 8, ServiceId: 6 },
  { FullServiceId: 8, ServiceId: 7 },
  { FullServiceId: 8, ServiceId: 8 },
  { FullServiceId: 8, ServiceId: 9 },
  // { FullServiceId: 8, ServiceId: 17 }, // Работа мастера

  // // Nissan Almera Classic (B10)
  // { FullServiceId: 9, ServiceId: 16 },
  // { FullServiceId: 9, ServiceId: 9 },
  // { FullServiceId: 9, ServiceId: 32 },
  // { FullServiceId: 9, ServiceId: 3 },
  // { FullServiceId: 9, ServiceId: 34 },
  // { FullServiceId: 9, ServiceId: 39 },
  // { FullServiceId: 9, ServiceId: 46 },
  // { FullServiceId: 9, ServiceId: 50 },
  // { FullServiceId: 9, ServiceId: 51 },
  // { FullServiceId: 9, ServiceId: 1 },
  // { FullServiceId: 9, ServiceId: 56 },
  // { FullServiceId: 9, ServiceId: 7 },
  // { FullServiceId: 9, ServiceId: 5 },

  // //	Nissan Note (E11) 1,4	17
  // { FullServiceId: 17, ServiceId: 3 },
  // { FullServiceId: 17, ServiceId: 35 },
  // { FullServiceId: 17, ServiceId: 46 },
  // { FullServiceId: 17, ServiceId: 1 },
  // { FullServiceId: 17, ServiceId: 56 },
  // { FullServiceId: 17, ServiceId: 63 },
  // { FullServiceId: 17, ServiceId: 5 },
  // { FullServiceId: 17, ServiceId: 67 },

  // //	Nissan Note (E11) 1,6	25
  // { FullServiceId: 25, ServiceId: 3 },
  // { FullServiceId: 25, ServiceId: 35 },
  // { FullServiceId: 25, ServiceId: 46 },
  // { FullServiceId: 25, ServiceId: 1 },
  // { FullServiceId: 25, ServiceId: 56 },
  // { FullServiceId: 25, ServiceId: 63 },
  // { FullServiceId: 25, ServiceId: 67 },

  // //	Nissan Tiida (C11) 1,6	33
  // { FullServiceId: 33, ServiceId: 3 },
  // { FullServiceId: 33, ServiceId: 34 },
  // { FullServiceId: 33, ServiceId: 46 },
  // { FullServiceId: 33, ServiceId: 1 },
  // { FullServiceId: 33, ServiceId: 56 },
  // { FullServiceId: 33, ServiceId: 63 },
  // { FullServiceId: 33, ServiceId: 5 },
  // { FullServiceId: 33, ServiceId: 68 },

  // //	Nissan Tiida (C11) 1,8	41
  // { FullServiceId: 41, ServiceId: 3 },
  // { FullServiceId: 41, ServiceId: 34 },
  // { FullServiceId: 41, ServiceId: 46 },
  // { FullServiceId: 41, ServiceId: 1 },
  // { FullServiceId: 41, ServiceId: 56 },
  // { FullServiceId: 41, ServiceId: 63 },
  // { FullServiceId: 41, ServiceId: 5 },
  // { FullServiceId: 41, ServiceId: 68 },

  // //	Nissan Tiida (C13)	49
  // { FullServiceId: 49, ServiceId: 20 },
  // { FullServiceId: 49, ServiceId: 3 },
  // { FullServiceId: 49, ServiceId: 2 },
  // { FullServiceId: 49, ServiceId: 37 },
  // { FullServiceId: 49, ServiceId: 44 },
  // { FullServiceId: 49, ServiceId: 1 },
  // { FullServiceId: 49, ServiceId: 58 },
  // { FullServiceId: 49, ServiceId: 61 },
  // { FullServiceId: 49, ServiceId: 5 },
  // { FullServiceId: 49, ServiceId: 68 },

  // //	Nissan Juke (F15) 1,6	57
  // { FullServiceId: 57, ServiceId: 3 },
  // { FullServiceId: 57, ServiceId: 34 },
  // { FullServiceId: 57, ServiceId: 40 },
  // { FullServiceId: 57, ServiceId: 46 },
  // { FullServiceId: 57, ServiceId: 1 },
  // { FullServiceId: 57, ServiceId: 56 },
  // { FullServiceId: 57, ServiceId: 63 },
  // { FullServiceId: 57, ServiceId: 5 },
  // { FullServiceId: 57, ServiceId: 68 },

  // //	Nissan Juke (F15) 1,6 турбо	65
  // { FullServiceId: 65, ServiceId: 21 },
  // { FullServiceId: 65, ServiceId: 23 },
  // { FullServiceId: 65, ServiceId: 29 },
  // { FullServiceId: 65, ServiceId: 3 },
  // { FullServiceId: 65, ServiceId: 34 },
  // { FullServiceId: 65, ServiceId: 40 },
  // { FullServiceId: 65, ServiceId: 41 },
  // { FullServiceId: 65, ServiceId: 45 },
  // { FullServiceId: 65, ServiceId: 51 },
  // { FullServiceId: 65, ServiceId: 1 },
  // { FullServiceId: 65, ServiceId: 63 },
  // { FullServiceId: 65, ServiceId: 68 },

  // //	Nissan Sentra (B17)	73
  // { FullServiceId: 73, ServiceId: 20 },
  // { FullServiceId: 73, ServiceId: 3 },
  // { FullServiceId: 73, ServiceId: 2 },
  // { FullServiceId: 73, ServiceId: 37 },
  // { FullServiceId: 73, ServiceId: 44 },
  // { FullServiceId: 73, ServiceId: 1 },
  // { FullServiceId: 73, ServiceId: 58 },
  // { FullServiceId: 73, ServiceId: 61 },
  // { FullServiceId: 73, ServiceId: 5 },
  // { FullServiceId: 73, ServiceId: 68 },

  // //	Nissan Qashqai (J10) 1,6	81
  // { FullServiceId: 81, ServiceId: 16 },
  // { FullServiceId: 81, ServiceId: 3 },
  // { FullServiceId: 81, ServiceId: 35 },
  // { FullServiceId: 81, ServiceId: 40 },
  // { FullServiceId: 81, ServiceId: 46 },
  // { FullServiceId: 81, ServiceId: 1 },
  // { FullServiceId: 81, ServiceId: 56 },
  // { FullServiceId: 81, ServiceId: 63 },
  // { FullServiceId: 81, ServiceId: 5 },
  // { FullServiceId: 81, ServiceId: 68 },

  // //	Nissan Qashqai (J10) 2,0	89
  // { FullServiceId: 89, ServiceId: 16 },
  // { FullServiceId: 89, ServiceId: 23 },
  // { FullServiceId: 89, ServiceId: 29 },
  // { FullServiceId: 89, ServiceId: 3 },
  // { FullServiceId: 89, ServiceId: 35 },
  // { FullServiceId: 89, ServiceId: 40 },
  // { FullServiceId: 89, ServiceId: 46 },
  // { FullServiceId: 89, ServiceId: 51 },
  // { FullServiceId: 89, ServiceId: 1 },
  // { FullServiceId: 89, ServiceId: 56 },
  // { FullServiceId: 89, ServiceId: 63 },
  // { FullServiceId: 89, ServiceId: 5 },
  // { FullServiceId: 89, ServiceId: 68 },

  // //	Nissan Qashqai (J11) 1,2 турбо	97
  // { FullServiceId: 97, ServiceId: 20 },
  // { FullServiceId: 97, ServiceId: 3 },
  // { FullServiceId: 97, ServiceId: 35 },
  // { FullServiceId: 97, ServiceId: 46 },
  // { FullServiceId: 97, ServiceId: 1 },
  // { FullServiceId: 97, ServiceId: 56 },
  // { FullServiceId: 97, ServiceId: 63 },
  // { FullServiceId: 97, ServiceId: 5 },
  // { FullServiceId: 97, ServiceId: 68 },

  // //	Nissan Qashqai (J11) 1,6 турбодизель	105
  // { FullServiceId: 105, ServiceId: 20 },
  // { FullServiceId: 105, ServiceId: 3 },
  // { FullServiceId: 105, ServiceId: 35 },
  // { FullServiceId: 105, ServiceId: 40 },
  // { FullServiceId: 105, ServiceId: 42 },
  // { FullServiceId: 105, ServiceId: 1 },
  // { FullServiceId: 105, ServiceId: 4 },
  // { FullServiceId: 105, ServiceId: 63 },
  // { FullServiceId: 105, ServiceId: 68 },

  // //	Nissan Qashqai (J11) 2,0	113
  // { FullServiceId: 113, ServiceId: 20 },
  // { FullServiceId: 113, ServiceId: 23 },
  // { FullServiceId: 113, ServiceId: 28 },
  // { FullServiceId: 113, ServiceId: 29 },
  // { FullServiceId: 113, ServiceId: 3 },
  // { FullServiceId: 113, ServiceId: 34 },
  // { FullServiceId: 113, ServiceId: 40 },
  // { FullServiceId: 113, ServiceId: 47 },
  // { FullServiceId: 113, ServiceId: 51 },
  // { FullServiceId: 113, ServiceId: 1 },
  // { FullServiceId: 113, ServiceId: 56 },
  // { FullServiceId: 113, ServiceId: 63 },
  // { FullServiceId: 113, ServiceId: 68 },

  // //	Nissan Teana (J32) 2,5 рядный	121
  // { FullServiceId: 121, ServiceId: 17 },
  // { FullServiceId: 121, ServiceId: 9 },
  // { FullServiceId: 121, ServiceId: 23 },
  // { FullServiceId: 121, ServiceId: 3 },
  // { FullServiceId: 121, ServiceId: 34 },
  // { FullServiceId: 121, ServiceId: 40 },
  // { FullServiceId: 121, ServiceId: 8 },
  // { FullServiceId: 121, ServiceId: 1 },
  // { FullServiceId: 121, ServiceId: 4 },
  // { FullServiceId: 121, ServiceId: 63 },

  // //	Nissan Teana (J32) 2,5 VQ	129
  // { FullServiceId: 129, ServiceId: 9 },
  // { FullServiceId: 129, ServiceId: 23 },
  // { FullServiceId: 129, ServiceId: 3 },
  // { FullServiceId: 129, ServiceId: 34 },
  // { FullServiceId: 129, ServiceId: 40 },
  // { FullServiceId: 129, ServiceId: 8 },
  // { FullServiceId: 129, ServiceId: 1 },
  // { FullServiceId: 129, ServiceId: 4 },
  // { FullServiceId: 129, ServiceId: 63 },

  // //	Nissan Teana (J32) 3,5	137
  // { FullServiceId: 137, ServiceId: 9 },
  // { FullServiceId: 137, ServiceId: 23 },
  // { FullServiceId: 137, ServiceId: 3 },
  // { FullServiceId: 137, ServiceId: 34 },
  // { FullServiceId: 137, ServiceId: 40 },
  // { FullServiceId: 137, ServiceId: 8 },
  // { FullServiceId: 137, ServiceId: 1 },
  // { FullServiceId: 137, ServiceId: 4 },
  // { FullServiceId: 137, ServiceId: 63 },

  // //	Nissan Teana (L33) 2,5	145
  // { FullServiceId: 145, ServiceId: 9 },
  // { FullServiceId: 145, ServiceId: 20 },
  // { FullServiceId: 145, ServiceId: 3 },
  // { FullServiceId: 145, ServiceId: 34 },
  // { FullServiceId: 145, ServiceId: 40 },
  // { FullServiceId: 145, ServiceId: 8 },
  // { FullServiceId: 145, ServiceId: 1 },
  // { FullServiceId: 145, ServiceId: 4 },
  // { FullServiceId: 145, ServiceId: 63 },
  // { FullServiceId: 145, ServiceId: 68 },

  // //	Nissan Teana (L33) 3,5	153
  // { FullServiceId: 153, ServiceId: 9 },
  // { FullServiceId: 153, ServiceId: 20 },
  // { FullServiceId: 153, ServiceId: 3 },
  // { FullServiceId: 153, ServiceId: 34 },
  // { FullServiceId: 153, ServiceId: 40 },
  // { FullServiceId: 153, ServiceId: 8 },
  // { FullServiceId: 153, ServiceId: 1 },
  // { FullServiceId: 153, ServiceId: 55 },
  // { FullServiceId: 153, ServiceId: 63 },
  // { FullServiceId: 153, ServiceId: 68 },

  // //	Nissan Terrano (D10) 1,6	161
  // { FullServiceId: 161, ServiceId: 9 },
  // { FullServiceId: 161, ServiceId: 20 },
  // { FullServiceId: 161, ServiceId: 3 },
  // { FullServiceId: 161, ServiceId: 35 },
  // { FullServiceId: 161, ServiceId: 46 },
  // { FullServiceId: 161, ServiceId: 48 },
  // { FullServiceId: 161, ServiceId: 1 },
  // { FullServiceId: 161, ServiceId: 57 },
  // { FullServiceId: 161, ServiceId: 63 },
  // { FullServiceId: 161, ServiceId: 68 },

  // //	Nissan Terrano (D10) 2,0	169
  // { FullServiceId: 169, ServiceId: 9 },
  // { FullServiceId: 169, ServiceId: 20 },
  // { FullServiceId: 169, ServiceId: 3 },
  // { FullServiceId: 169, ServiceId: 35 },
  // { FullServiceId: 169, ServiceId: 46 },
  // { FullServiceId: 169, ServiceId: 48 },
  // { FullServiceId: 169, ServiceId: 1 },
  // { FullServiceId: 169, ServiceId: 57 },
  // { FullServiceId: 169, ServiceId: 63 },
  // { FullServiceId: 169, ServiceId: 68 },

  // //	Nissan Terrano (D10) 1,6 2016	177
  // { FullServiceId: 177, ServiceId: 9 },
  // { FullServiceId: 177, ServiceId: 20 },
  // { FullServiceId: 177, ServiceId: 3 },
  // { FullServiceId: 177, ServiceId: 35 },
  // { FullServiceId: 177, ServiceId: 46 },
  // { FullServiceId: 177, ServiceId: 1 },
  // { FullServiceId: 177, ServiceId: 57 },
  // { FullServiceId: 177, ServiceId: 63 },
  // { FullServiceId: 177, ServiceId: 68 },

  // //	Nissan Terrano (D10) 2,0 2016	185
  // { FullServiceId: 185, ServiceId: 9 },
  // { FullServiceId: 185, ServiceId: 20 },
  // { FullServiceId: 185, ServiceId: 3 },
  // { FullServiceId: 185, ServiceId: 35 },
  // { FullServiceId: 185, ServiceId: 46 },
  // { FullServiceId: 185, ServiceId: 48 },
  // { FullServiceId: 185, ServiceId: 1 },
  // { FullServiceId: 185, ServiceId: 57 },
  // { FullServiceId: 185, ServiceId: 63 },
  // { FullServiceId: 185, ServiceId: 68 },

  // //	Nissan X-Trail (T31) 2,0	193
  // { FullServiceId: 193, ServiceId: 23 },
  // { FullServiceId: 193, ServiceId: 29 },
  // { FullServiceId: 193, ServiceId: 3 },
  // { FullServiceId: 193, ServiceId: 35 },
  // { FullServiceId: 193, ServiceId: 40 },
  // { FullServiceId: 193, ServiceId: 46 },
  // { FullServiceId: 193, ServiceId: 1 },
  // { FullServiceId: 193, ServiceId: 56 },
  // { FullServiceId: 193, ServiceId: 63 },
  // { FullServiceId: 193, ServiceId: 5 },
  // { FullServiceId: 193, ServiceId: 68 },

  // //	Nissan X-Trail (T31) 2,0 турбодизель	201
  // { FullServiceId: 201, ServiceId: 23 },
  // { FullServiceId: 201, ServiceId: 27 },
  // { FullServiceId: 201, ServiceId: 29 },
  // { FullServiceId: 201, ServiceId: 3 },
  // { FullServiceId: 201, ServiceId: 35 },
  // { FullServiceId: 201, ServiceId: 46 },
  // { FullServiceId: 201, ServiceId: 1 },
  // { FullServiceId: 201, ServiceId: 56 },
  // { FullServiceId: 201, ServiceId: 63 },
  // { FullServiceId: 201, ServiceId: 68 },

  // //	Nissan X-Trail (T31) 2,5	209
  // { FullServiceId: 209, ServiceId: 23 },
  // { FullServiceId: 209, ServiceId: 29 },
  // { FullServiceId: 209, ServiceId: 3 },
  // { FullServiceId: 209, ServiceId: 35 },
  // { FullServiceId: 209, ServiceId: 40 },
  // { FullServiceId: 209, ServiceId: 46 },
  // { FullServiceId: 209, ServiceId: 1 },
  // { FullServiceId: 209, ServiceId: 56 },
  // { FullServiceId: 209, ServiceId: 63 },
  // { FullServiceId: 209, ServiceId: 5 },
  // { FullServiceId: 209, ServiceId: 68 },

  // //	Nissan X-Trail (T32) 1,6 турбодизель	217
  // { FullServiceId: 217, ServiceId: 20 },
  // { FullServiceId: 217, ServiceId: 23 },
  // { FullServiceId: 217, ServiceId: 29 },
  // { FullServiceId: 217, ServiceId: 3 },
  // { FullServiceId: 217, ServiceId: 35 },
  // { FullServiceId: 217, ServiceId: 40 },
  // { FullServiceId: 217, ServiceId: 46 },
  // { FullServiceId: 217, ServiceId: 52 },
  // { FullServiceId: 217, ServiceId: 1 },
  // { FullServiceId: 217, ServiceId: 59 },
  // { FullServiceId: 217, ServiceId: 63 },
  // { FullServiceId: 217, ServiceId: 5 },
  // { FullServiceId: 217, ServiceId: 68 },

  // //	Nissan X-Trail (T32) 2,0	225
  // { FullServiceId: 225, ServiceId: 20 },
  // { FullServiceId: 225, ServiceId: 23 },
  // { FullServiceId: 225, ServiceId: 29 },
  // { FullServiceId: 225, ServiceId: 3 },
  // { FullServiceId: 225, ServiceId: 35 },
  // { FullServiceId: 225, ServiceId: 40 },
  // { FullServiceId: 225, ServiceId: 46 },
  // { FullServiceId: 225, ServiceId: 52 },
  // { FullServiceId: 225, ServiceId: 1 },
  // { FullServiceId: 225, ServiceId: 59 },
  // { FullServiceId: 225, ServiceId: 63 },
  // { FullServiceId: 225, ServiceId: 5 },
  // { FullServiceId: 225, ServiceId: 68 },

  // //	Nissan X-Trail (T32) 2,5	233
  // { FullServiceId: 233, ServiceId: 20 },
  // { FullServiceId: 233, ServiceId: 23 },
  // { FullServiceId: 233, ServiceId: 29 },
  // { FullServiceId: 233, ServiceId: 3 },
  // { FullServiceId: 233, ServiceId: 35 },
  // { FullServiceId: 233, ServiceId: 40 },
  // { FullServiceId: 233, ServiceId: 46 },
  // { FullServiceId: 233, ServiceId: 52 },
  // { FullServiceId: 233, ServiceId: 1 },
  // { FullServiceId: 233, ServiceId: 59 },
  // { FullServiceId: 233, ServiceId: 63 },
  // { FullServiceId: 233, ServiceId: 5 },
  // { FullServiceId: 233, ServiceId: 68 },

  // //	Nissan Murano (Z51)	241
  // { FullServiceId: 241, ServiceId: 9 },
  // { FullServiceId: 241, ServiceId: 23 },
  // { FullServiceId: 241, ServiceId: 29 },
  // { FullServiceId: 241, ServiceId: 3 },
  // { FullServiceId: 241, ServiceId: 35 },
  // { FullServiceId: 241, ServiceId: 40 },
  // { FullServiceId: 241, ServiceId: 8 },
  // { FullServiceId: 241, ServiceId: 51 },
  // { FullServiceId: 241, ServiceId: 1 },
  // { FullServiceId: 241, ServiceId: 4 },
  // { FullServiceId: 241, ServiceId: 63 },
  // { FullServiceId: 241, ServiceId: 68 },

  // //	Nissan Murano (Z52) 2,5 гибрид	249
  // { FullServiceId: 249, ServiceId: 9 },
  // { FullServiceId: 249, ServiceId: 20 },
  // { FullServiceId: 249, ServiceId: 23 },
  // { FullServiceId: 249, ServiceId: 29 },
  // { FullServiceId: 249, ServiceId: 3 },
  // { FullServiceId: 249, ServiceId: 35 },
  // { FullServiceId: 249, ServiceId: 40 },
  // { FullServiceId: 249, ServiceId: 8 },
  // { FullServiceId: 249, ServiceId: 51 },
  // { FullServiceId: 249, ServiceId: 53 },
  // { FullServiceId: 249, ServiceId: 60 },
  // { FullServiceId: 249, ServiceId: 63 },
  // { FullServiceId: 249, ServiceId: 68 },

  // //	Nissan Murano (Z52) 3,5	257
  // { FullServiceId: 257, ServiceId: 9 },
  // { FullServiceId: 257, ServiceId: 20 },
  // { FullServiceId: 257, ServiceId: 23 },
  // { FullServiceId: 257, ServiceId: 29 },
  // { FullServiceId: 257, ServiceId: 3 },
  // { FullServiceId: 257, ServiceId: 35 },
  // { FullServiceId: 257, ServiceId: 40 },
  // { FullServiceId: 257, ServiceId: 8 },
  // { FullServiceId: 257, ServiceId: 51 },
  // { FullServiceId: 257, ServiceId: 1 },
  // { FullServiceId: 257, ServiceId: 60 },
  // { FullServiceId: 257, ServiceId: 63 },
  // { FullServiceId: 257, ServiceId: 68 },

  // //	Nissan Navara (D40) 2,5 турбодизель	265
  // { FullServiceId: 265, ServiceId: 15 },
  // { FullServiceId: 265, ServiceId: 22 },
  // { FullServiceId: 265, ServiceId: 26 },
  // { FullServiceId: 265, ServiceId: 29 },
  // { FullServiceId: 265, ServiceId: 3 },
  // { FullServiceId: 265, ServiceId: 35 },
  // { FullServiceId: 265, ServiceId: 46 },
  // { FullServiceId: 265, ServiceId: 49 },
  // { FullServiceId: 265, ServiceId: 51 },
  // { FullServiceId: 265, ServiceId: 1 },
  // { FullServiceId: 265, ServiceId: 54 },
  // { FullServiceId: 265, ServiceId: 56 },
  // { FullServiceId: 265, ServiceId: 63 },

  // //	Nissan Navara (D40) 2,5 турбодизель DPF	273
  // { FullServiceId: 273, ServiceId: 15 },
  // { FullServiceId: 273, ServiceId: 22 },
  // { FullServiceId: 273, ServiceId: 26 },
  // { FullServiceId: 273, ServiceId: 29 },
  // { FullServiceId: 273, ServiceId: 3 },
  // { FullServiceId: 273, ServiceId: 35 },
  // { FullServiceId: 273, ServiceId: 46 },
  // { FullServiceId: 273, ServiceId: 49 },
  // { FullServiceId: 273, ServiceId: 51 },
  // { FullServiceId: 273, ServiceId: 1 },
  // { FullServiceId: 273, ServiceId: 54 },
  // { FullServiceId: 273, ServiceId: 56 },
  // { FullServiceId: 273, ServiceId: 63 },

  // //	Nissan Navara (D40) 3,0 турбодизель	281
  // { FullServiceId: 281, ServiceId: 15 },
  // { FullServiceId: 281, ServiceId: 9 },
  // { FullServiceId: 281, ServiceId: 23 },
  // { FullServiceId: 281, ServiceId: 29 },
  // { FullServiceId: 281, ServiceId: 3 },
  // { FullServiceId: 281, ServiceId: 34 },
  // { FullServiceId: 281, ServiceId: 39 },
  // { FullServiceId: 281, ServiceId: 43 },
  // { FullServiceId: 281, ServiceId: 51 },
  // { FullServiceId: 281, ServiceId: 1 },
  // { FullServiceId: 281, ServiceId: 54 },
  // { FullServiceId: 281, ServiceId: 7 },
  // { FullServiceId: 281, ServiceId: 68 },

  // //	Nissan Pickup (D22) 2,5 турбодизель	289
  // { FullServiceId: 289, ServiceId: 15 },
  // { FullServiceId: 289, ServiceId: 13 },
  // { FullServiceId: 289, ServiceId: 16 },
  // { FullServiceId: 289, ServiceId: 9 },
  // { FullServiceId: 289, ServiceId: 19 },
  // { FullServiceId: 289, ServiceId: 25 },
  // { FullServiceId: 289, ServiceId: 29 },
  // { FullServiceId: 289, ServiceId: 30 },
  // { FullServiceId: 289, ServiceId: 31 },
  // { FullServiceId: 289, ServiceId: 10 },
  // { FullServiceId: 289, ServiceId: 35 },
  // { FullServiceId: 289, ServiceId: 46 },
  // { FullServiceId: 289, ServiceId: 1 },
  // { FullServiceId: 289, ServiceId: 56 },
  // { FullServiceId: 289, ServiceId: 62 },
  // { FullServiceId: 289, ServiceId: 63 },
  // { FullServiceId: 289, ServiceId: 65 },
  // { FullServiceId: 289, ServiceId: 5 },
  // { FullServiceId: 289, ServiceId: 66 },
  // { FullServiceId: 289, ServiceId: 69 },

  // //	Nissan Pickup (D22) 2,5 турбодизель 4WD	297
  // { FullServiceId: 297, ServiceId: 15 },
  // { FullServiceId: 297, ServiceId: 13 },
  // { FullServiceId: 297, ServiceId: 16 },
  // { FullServiceId: 297, ServiceId: 9 },
  // { FullServiceId: 297, ServiceId: 19 },
  // { FullServiceId: 297, ServiceId: 25 },
  // { FullServiceId: 297, ServiceId: 29 },
  // { FullServiceId: 297, ServiceId: 30 },
  // { FullServiceId: 297, ServiceId: 31 },
  // { FullServiceId: 297, ServiceId: 10 },
  // { FullServiceId: 297, ServiceId: 35 },
  // { FullServiceId: 297, ServiceId: 46 },
  // { FullServiceId: 297, ServiceId: 1 },
  // { FullServiceId: 297, ServiceId: 56 },
  // { FullServiceId: 297, ServiceId: 62 },
  // { FullServiceId: 297, ServiceId: 63 },
  // { FullServiceId: 297, ServiceId: 65 },
  // { FullServiceId: 297, ServiceId: 5 },
  // { FullServiceId: 297, ServiceId: 66 },
  // { FullServiceId: 297, ServiceId: 69 },

  // //	Nissan Pathfinder (R51) 2,5 турбодизель	305
  // { FullServiceId: 305, ServiceId: 9 },
  // { FullServiceId: 305, ServiceId: 24 },
  // { FullServiceId: 305, ServiceId: 29 },
  // { FullServiceId: 305, ServiceId: 3 },
  // { FullServiceId: 305, ServiceId: 35 },
  // { FullServiceId: 305, ServiceId: 38 },
  // { FullServiceId: 305, ServiceId: 46 },
  // { FullServiceId: 305, ServiceId: 51 },
  // { FullServiceId: 305, ServiceId: 1 },
  // { FullServiceId: 305, ServiceId: 54 },
  // { FullServiceId: 305, ServiceId: 56 },
  // { FullServiceId: 305, ServiceId: 63 },
  // { FullServiceId: 305, ServiceId: 68 },

  // //	Nissan Pathfinder (R51) 2,5 турбодизель DPF	313
  // { FullServiceId: 313, ServiceId: 9 },
  // { FullServiceId: 313, ServiceId: 24 },
  // { FullServiceId: 313, ServiceId: 29 },
  // { FullServiceId: 313, ServiceId: 3 },
  // { FullServiceId: 313, ServiceId: 35 },
  // { FullServiceId: 313, ServiceId: 38 },
  // { FullServiceId: 313, ServiceId: 46 },
  // { FullServiceId: 313, ServiceId: 51 },
  // { FullServiceId: 313, ServiceId: 1 },
  // { FullServiceId: 313, ServiceId: 54 },
  // { FullServiceId: 313, ServiceId: 56 },
  // { FullServiceId: 313, ServiceId: 63 },
  // { FullServiceId: 313, ServiceId: 68 },

  // //	Nissan Pathfinder (R51) 3,0 турбодизель	321
  // { FullServiceId: 321, ServiceId: 9 },
  // { FullServiceId: 321, ServiceId: 23 },
  // { FullServiceId: 321, ServiceId: 29 },
  // { FullServiceId: 321, ServiceId: 3 },
  // { FullServiceId: 321, ServiceId: 34 },
  // { FullServiceId: 321, ServiceId: 38 },
  // { FullServiceId: 321, ServiceId: 46 },
  // { FullServiceId: 321, ServiceId: 51 },
  // { FullServiceId: 321, ServiceId: 1 },
  // { FullServiceId: 321, ServiceId: 54 },
  // { FullServiceId: 321, ServiceId: 56 },
  // { FullServiceId: 321, ServiceId: 63 },
  // { FullServiceId: 321, ServiceId: 68 },

  // //	Nissan Pathfinder (R51) 4,0	329
  // { FullServiceId: 329, ServiceId: 9 },
  // { FullServiceId: 329, ServiceId: 20 },
  // { FullServiceId: 329, ServiceId: 23 },
  // { FullServiceId: 329, ServiceId: 29 },
  // { FullServiceId: 329, ServiceId: 3 },
  // { FullServiceId: 329, ServiceId: 35 },
  // { FullServiceId: 329, ServiceId: 10 },
  // { FullServiceId: 329, ServiceId: 8 },
  // { FullServiceId: 329, ServiceId: 51 },
  // { FullServiceId: 329, ServiceId: 1 },
  // { FullServiceId: 329, ServiceId: 60 },
  // { FullServiceId: 329, ServiceId: 63 },
  // { FullServiceId: 329, ServiceId: 68 },

  // //	Nissan Pathfinder (R52) 2,5 гибрид	337
  // { FullServiceId: 337, ServiceId: 9 },
  // { FullServiceId: 337, ServiceId: 20 },
  // { FullServiceId: 337, ServiceId: 23 },
  // { FullServiceId: 337, ServiceId: 29 },
  // { FullServiceId: 337, ServiceId: 3 },
  // { FullServiceId: 337, ServiceId: 35 },
  // { FullServiceId: 337, ServiceId: 40 },
  // { FullServiceId: 337, ServiceId: 8 },
  // { FullServiceId: 337, ServiceId: 51 },
  // { FullServiceId: 337, ServiceId: 53 },
  // { FullServiceId: 337, ServiceId: 60 },
  // { FullServiceId: 337, ServiceId: 63 },
  // { FullServiceId: 337, ServiceId: 68 },

  // //	Nissan Pathfinder (R52) 3,5	345
  // { FullServiceId: 345, ServiceId: 9 },
  // { FullServiceId: 345, ServiceId: 20 },
  // { FullServiceId: 345, ServiceId: 23 },
  // { FullServiceId: 345, ServiceId: 29 },
  // { FullServiceId: 345, ServiceId: 3 },
  // { FullServiceId: 345, ServiceId: 35 },
  // { FullServiceId: 345, ServiceId: 40 },
  // { FullServiceId: 345, ServiceId: 8 },
  // { FullServiceId: 345, ServiceId: 51 },
  // { FullServiceId: 345, ServiceId: 1 },
  // { FullServiceId: 345, ServiceId: 53 },
  // { FullServiceId: 345, ServiceId: 60 },
  // { FullServiceId: 345, ServiceId: 63 },
  // { FullServiceId: 345, ServiceId: 68 },

  // //	Nissan Patrol (Y62)	353
  // { FullServiceId: 353, ServiceId: 15 },
  // { FullServiceId: 353, ServiceId: 9 },
  // { FullServiceId: 353, ServiceId: 23 },
  // { FullServiceId: 353, ServiceId: 29 },
  // { FullServiceId: 353, ServiceId: 32 },
  // { FullServiceId: 353, ServiceId: 3 },
  // { FullServiceId: 353, ServiceId: 34 },
  // { FullServiceId: 353, ServiceId: 36 },
  // { FullServiceId: 353, ServiceId: 8 },
  // { FullServiceId: 353, ServiceId: 51 },
  // { FullServiceId: 353, ServiceId: 1 },
  // { FullServiceId: 353, ServiceId: 4 },
  // { FullServiceId: 353, ServiceId: 63 },
  // { FullServiceId: 353, ServiceId: 64 },
  // { FullServiceId: 353, ServiceId: 67 },

  // //	Nissan Cabstar (F24)	361
  // { FullServiceId: 361, ServiceId: 14 },
  // { FullServiceId: 361, ServiceId: 18 },
  // { FullServiceId: 361, ServiceId: 31 },
  // { FullServiceId: 361, ServiceId: 63 },
];

const model1 = () => {
  const modelArr = [];
  for (let i = 1; i < 25; i += 1) {
    modelArr.push(
      { FullServiceId: i, ServiceId: 16 },
      { FullServiceId: i, ServiceId: 9 },
      { FullServiceId: i, ServiceId: 32 },
      { FullServiceId: i, ServiceId: 3 },
      { FullServiceId: i, ServiceId: 34 },
      { FullServiceId: i, ServiceId: 39 },
      { FullServiceId: i, ServiceId: 46 },
      { FullServiceId: i, ServiceId: 50 },
      { FullServiceId: i, ServiceId: 51 },
      { FullServiceId: i, ServiceId: 1 },
      { FullServiceId: i, ServiceId: 56 },
      { FullServiceId: i, ServiceId: 7 },
      { FullServiceId: i, ServiceId: 5 },
    );
  }
  return modelArr;
};
const model2 = () => {
  const modelArr = [];
  for (let i = 25; i < 47; i += 1) {
    modelArr.push(
      { FullServiceId: i, ServiceId: 16 },
      { FullServiceId: i, ServiceId: 9 },
      { FullServiceId: i, ServiceId: 32 },
      { FullServiceId: i, ServiceId: 3 },
      { FullServiceId: i, ServiceId: 34 },
      { FullServiceId: i, ServiceId: 39 },
      { FullServiceId: i, ServiceId: 46 },
      { FullServiceId: i, ServiceId: 50 },
      { FullServiceId: i, ServiceId: 51 },
      { FullServiceId: i, ServiceId: 1 },
      { FullServiceId: i, ServiceId: 56 },
      { FullServiceId: i, ServiceId: 7 },
      { FullServiceId: i, ServiceId: 5 },
    );
  }
  return modelArr;
};

const arr = [...model1(), ...model2()];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < arr.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('FullServiceServices', [{
        FullServiceId: arr[i].FullServiceId,
        ServiceId: arr[i].ServiceId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FullServiceServices', null, {});
  },
};
