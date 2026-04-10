export interface RegionData {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  color: string;
  d: string;
}

export const ssgSectors: Record<string, RegionData> = {
  'couple-right': {
    id: 'couple-right',
    name: '홈런커플존(우측)',
    description: '우측 홈런커플존에 대한 테스트 구역입니다.',
    imageUrl: 'https://picsum.photos/id/1015/800/500',
    color: '#D53C74',
    d: 'M 1762 473 L 1761 531 L 1843 540 L 1913 554 L 1981 573 L 2064 603 L 2132 635 L 2204 677 L 2266 720 L 2330 778 L 2336 777 L 2379 740 L 2361 717 L 2328 685 L 2262 632 L 2201 593 L 2110 548 L 2037 521 L 1938 494 L 1858 480 Z'
  },
  'couple-left': {
    id: 'couple-left',
    name: '홈런커플존(좌측)',
    description: '좌측 홈런커플존에 대한 테스트 구역입니다.',
    imageUrl: 'https://picsum.photos/id/1016/800/500',
    color: '#D53C74',
    d: 'M 1601 469 L 1533 470 L 1432 486 L 1338 513 L 1266 542 L 1184 584 L 1099 639 L 1018 707 L 990 738 L 980 755 L 1015 787 L 1108 706 L 1180 657 L 1259 615 L 1336 583 L 1398 563 L 1469 546 L 1513 538 L 1603 532 Z'
  },
  'outter-family': {
    id: 'outter-family',
    name: '외야패밀리존',
    description: '외야패밀리존',
    imageUrl: 'https://picsum.photos/id/380/800/500',
    color: '#BD9C73',
    d: 'M 2150 480 L 2139 511 L 2129 529 L 2127 542 L 2184 568 L 2245 603 L 2339 676 L 2419 763 L 2480 851 L 2536 816 L 2484 736 L 2451 696 L 2383 624 L 2317 573 L 2270 542 Z'
  },
  'rocket-battery': {
    id: 'rocket-battery',
    name: '로케트배터리 외야파티덱',
    description: '로케트배터리 외야파티덱',
    imageUrl: 'https://picsum.photos/id/72/800/500',
    color: '#225F3D',
    d: 'M 1593 315 L 1573 313 L 1489 319 L 1430 327 L 1372 339 L 1299 360 L 1207 393 L 1134 424 L 1125 432 L 1153 485 L 1271 433 L 1383 399 L 1495 379 L 1596 374 Z'
  },
  'mollis-green': {
    id: 'mollis-green',
    name: '몰리스 그린존',
    description: '몰리스 그린존',
    imageUrl: 'https://picsum.photos/id/200/800/500',
    color: '#93BC52',
    d: 'M 953 529 L 937 538 L 880 586 L 833 633 L 785 688 L 737 752 L 691 824 L 653 900 L 655 903 L 680 907 L 728 921 L 733 920 L 771 848 L 848 732 L 919 651 L 996 578 Z'
  },
  'emart-friendly-1base': {
    id: 'emart-friendly-1base',
    name: '이마트 프렌들리존(1루)',
    description: '이마트 프렌들리존(1루)',
    imageUrl: 'https://picsum.photos/id/485/800/500',
    color: '#3986A4',
    d: 'M 2460 1367 L 2454 1374 L 2452 1383 L 2405 1478 L 2350 1573 L 2315 1626 L 2264 1690 L 2306 1759 L 2355 1690 L 2432 1562 L 2505 1409 L 2509 1393 Z'
  },
  'emart-friendly-3base': {
    id: 'emart-friendly-3base',
    name: '이마트 프렌들리존(3루)',
    description: '이마트 프렌들리존(3루)',
    imageUrl: 'https://picsum.photos/id/379/800/500',
    color: '#3982A2',
    d: 'M 900 1370 L 851 1399 L 878 1460 L 956 1599 L 1016 1695 L 1057 1752 L 1099 1690 L 1050 1628 L 1007 1564 L 980 1517 L 971 1507 L 971 1502 L 930 1428 L 904 1371 Z'
  },
  'emart-bbq': {
    id: 'emart-bbq',
    name: '이마트 바비큐존',
    description: '이마트 바비큐존',
    imageUrl: 'https://picsum.photos/id/373/800/500',
    color: '#8E4E2A',
    d: 'M 2299 477 L 2273 532 L 2335 572 L 2377 605 L 2464 693 L 2516 645 L 2491 618 L 2416 552 L 2345 502 Z'
  },
  'dodramhandon-bbq-right': {
    id: 'dodramhandon-bbq-right',
    name: '도드람한돈 바비큐존(우측)',
    description: '도드람한돈 바비큐존(우측)',
    imageUrl: 'https://picsum.photos/id/251/800/500',
    color: '#593419',
    d: 'M 2522 649 L 2476 688 L 2468 698 L 2519 767 L 2523 768 L 2544 805 L 2548 806 L 2615 760 L 2564 696 Z'
  },
  'dodramhandon-bbq-left': {
    id: 'dodramhandon-bbq-left',
    name: '도드람한돈 바비큐존(좌측)',
    description: '도드람한돈 바비큐존(좌측)',
    imageUrl: 'https://picsum.photos/id/313/800/500',
    color: '#5D3A1E',
    d: 'M 2174 416 L 2154 471 L 2198 490 L 2268 528 L 2293 472 L 2217 432 L 2180 416 Z'
  },
  '101B': {
    id: '101B',
    name: '101B',
    description: '101B',
    imageUrl: 'https://picsum.photos/id/304/800/500',
    color: '#234978',
    d: 'M 2666 1081 L 2560 1103 L 2561 1179 L 2667 1201 L 2670 1196 L 2672 1152 Z'
  },
  '102B': {
    id: '102B',
    name: '102B',
    description: '102B',
    imageUrl: 'https://picsum.photos/id/450/800/500',
    color: '#234978',
    d: 'M 2609 937 L 2549 967 L 2567 1009 L 2567 1034 L 2551 1038 L 2560 1094 L 2662 1070 L 2650 1025 L 2623 960 L 2620 959 L 2617 948 Z'
  },
  '103B': {
    id: '103B',
    name: '103B',
    description: '103B',
    imageUrl: 'https://picsum.photos/id/238/800/500',
    color: '#234978',
    d: 'M 2543 825 L 2485 862 L 2517 910 L 2540 954 L 2546 955 L 2604 926 L 2604 923 L 2565 854 L 2560 851 L 2559 845 Z'
  },
  '104B': {
    id: '104B',
    name: '104B',
    description: '104B',
    imageUrl: 'https://picsum.photos/id/292/800/500',
    color: '#E1D581',
    d: 'M 2018 434 L 2001 497 L 2116 534 L 2139 476 L 2066 447 Z'
  },
  '105B': {
    id: '105B',
    name: '105B',
    description: '105B',
    imageUrl: 'https://picsum.photos/id/195/800/500',
    color: '#DFD37F',
    d: 'M 1889 405 L 1884 473 L 1925 479 L 1992 496 L 1995 494 L 2009 431 L 1939 412 L 1897 404 Z'
  },
  '106B': {
    id: '106B',
    name: '106B',
    description: '106B',
    imageUrl: 'https://picsum.photos/id/230/800/500',
    color: '#E3D57D',
    d: 'M 1765 390 L 1763 461 L 1873 471 L 1880 408 L 1878 401 Z'
  },
  '107B': {
    id: '107B',
    name: '107B',
    description: '107B',
    imageUrl: 'https://picsum.photos/id/234/800/500',
    color: '#DFD37F',
    d: 'M 1596 383 L 1531 385 L 1474 392 L 1484 464 L 1532 457 L 1600 456 Z'
  },
  '108B': {
    id: '108B',
    name: '108B',
    description: '108B',
    imageUrl: 'https://picsum.photos/id/451/800/500',
    color: '#E2D181',
    d: 'M 1465 395 L 1420 401 L 1342 421 L 1343 431 L 1364 491 L 1416 477 L 1473 466 Z'
  },
  '109B': {
    id: '109B',
    name: '109B',
    description: '109B',
    imageUrl: 'https://picsum.photos/id/415/800/500',
    color: '#E3D57D',
    d: 'M 1332 426 L 1264 448 L 1213 470 L 1243 537 L 1354 496 Z'
  },
  '110B': {
    id: '110B',
    name: '110B',
    description: '110B',
    imageUrl: 'https://picsum.photos/id/73/800/500',
    color: '#DFD37F',
    d: 'M 1202 474 L 1136 503 L 1092 527 L 1134 597 L 1178 570 L 1233 544 Z'
  },
  '111B': {
    id: '111B',
    name: '111B',
    description: '111B',
    imageUrl: 'https://picsum.photos/id/354/800/500',
    color: '#DFD37F',
    d: 'M 1080 532 L 1008 582 L 979 609 L 1037 672 L 1124 603 Z'
  },
  '112B': {
    id: '112B',
    name: '112B',
    description: '112B',
    imageUrl: 'https://picsum.photos/id/26/800/500',
    color: '#DCD47F',
    d: 'M 971 615 L 906 680 L 884 707 L 951 764 L 959 759 L 983 728 L 1029 679 Z'
  },
  '113B': {
    id: '113B',
    name: '113B',
    description: '113B',
    imageUrl: 'https://picsum.photos/id/282/800/500',
    color: '#DFD37F',
    d: 'M 877 716 L 842 760 L 811 810 L 882 850 L 945 771 Z'
  },
  '114B': {
    id: '114B',
    name: '114B',
    description: '114B',
    imageUrl: 'https://picsum.photos/id/440/800/500',
    color: '#DED47B',
    d: 'M 804 819 L 764 888 L 746 926 L 818 946 L 875 859 Z'
  },
  '115B': {
    id: '115B',
    name: '115B',
    description: '115B',
    imageUrl: 'https://picsum.photos/id/409/800/500',
    color: '#234978',
    d: 'M 740 937 L 719 992 L 719 1003 L 715 1008 L 704 1066 L 801 1083 L 812 1034 L 800 1033 L 800 1005 L 815 958 Z'
  },
  '116B': {
    id: '116B',
    name: '116B',
    description: '116B',
    imageUrl: 'https://picsum.photos/id/237/800/500',
    color: '#234978',
    d: 'M 700 1078 L 692 1104 L 686 1144 L 685 1199 L 793 1188 L 796 1121 L 800 1095 Z'
  },
  '117B': {
    id: '117B',
    name: '117B',
    description: '117B',
    imageUrl: 'https://picsum.photos/id/457/800/500',
    color: '#284E7F',
    d: 'M 795 1199 L 692 1211 L 685 1214 L 692 1294 L 704 1347 L 810 1318 L 798 1246 Z'
  },
  '118B': {
    id: '118B',
    name: '118B',
    description: '118B',
    imageUrl: 'https://picsum.photos/id/134/800/500',
    color: '#234978',
    d: 'M 815 1330 L 709 1362 L 725 1422 L 752 1489 L 858 1438 L 831 1376 Z'
  },
  '201B': {
    id: '201B',
    name: '201B',
    description: '201B',
    imageUrl: 'https://picsum.photos/id/375/800/500',
    color: '#234978',
    d: 'M 2680 1076 L 2678 1084 L 2684 1152 L 2682 1202 L 2685 1205 L 2790 1223 L 2786 1154 L 2765 1058 L 2759 1056 Z'
  },
  '202B': {
    id: '202B',
    name: '202B',
    description: '202B',
    imageUrl: 'https://picsum.photos/id/401/800/500',
    color: '#214A78',
    d: 'M 2698 893 L 2622 930 L 2651 991 L 2677 1067 L 2760 1045 L 2751 1012 L 2732 964 Z'
  },
  '203B': {
    id: '203B',
    name: '203B',
    description: '203B',
    imageUrl: 'https://picsum.photos/id/162/800/500',
    color: '#234978',
    d: 'M 2624 773 L 2556 817 L 2616 920 L 2691 882 L 2687 870 L 2656 817 Z'
  },
  '204B': {
    id: '204B',
    name: '204B',
    description: '204B',
    imageUrl: 'https://picsum.photos/id/470/800/500',
    color: '#DFD37F',
    d: 'M 2038 366 L 2022 418 L 2023 423 L 2086 443 L 2144 466 L 2165 414 L 2163 410 L 2090 381 Z'
  },
  '205B': {
    id: '205B',
    name: '205B',
    description: '205B',
    imageUrl: 'https://picsum.photos/id/378/800/500',
    color: '#DFD37F',
    d: 'M 1898 332 L 1893 393 L 1931 399 L 2012 419 L 2028 361 L 1949 340 Z'
  },
  '206B': {
    id: '206B',
    name: '206B',
    description: '206B',
    imageUrl: 'https://picsum.photos/id/246/800/500',
    color: '#E1D27F',
    d: 'M 1767 316 L 1765 378 L 1881 389 L 1885 329 L 1815 319 Z'
  },
  '207B': {
    id: '207B',
    name: '207B',
    description: '207B',
    imageUrl: 'https://picsum.photos/id/386/800/500',
    color: '#234978',
    d: 'M 725 932 L 649 913 L 624 983 L 597 1089 L 587 1152 L 583 1209 L 634 1205 L 672 1198 L 674 1157 L 684 1082 L 698 1015 Z'
  },
  '208B': {
    id: '208B',
    name: '208B',
    description: '208B',
    imageUrl: 'https://picsum.photos/id/252/800/500',
    color: '#234978',
    d: 'M 671 1215 L 587 1223 L 583 1226 L 581 1293 L 585 1350 L 591 1381 L 690 1353 L 678 1296 Z'
  },
  '209B': {
    id: '209B',
    name: '209B',
    description: '209B',
    imageUrl: 'https://picsum.photos/id/355/800/500',
    color: '#234978',
    d: 'M 694 1366 L 594 1395 L 593 1406 L 608 1466 L 624 1512 L 641 1542 L 726 1504 L 739 1495 L 714 1439 Z'
  },
};
