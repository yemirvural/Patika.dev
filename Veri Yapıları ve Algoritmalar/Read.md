[Selection Sort Projesi]
(Case-1)

[22,27,16,2,18,6] -> Selection Sort
Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.
Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız
1-Average case: Aradığımız sayının ortada olması
2-Worst case: Aradığımız sayının sonda olması
3-Best case: Aradığımız sayının dizinin en başında olması.

0-[22,27,16,2,18,6]
1-[2,27,16,22,18,6]
2-[2,6,16,22,18,27]
3-[2,6,16,18,22,27]

3 Aşamda gerçekleşti.
18 sayısı ortaya yakın --> Average case
Yapılan işlem sayısı: n + (n - 1) + (n - 2) + (n - 3) ... + 1 = (n.(n + 1)) / 2
BigO :: O(n^2)

(Case-2)
[7,3,5,8,2,9,4,15,6] -> Selection Sort
dizisinin Selection Sort'a göre adımlarını yazınız.

0-[7,3,5,8,2,9,4,15,6]
1-[2,3,5,8,7,9,4,15,6]
2-[2,3,4,8,7,9,5,15,6]
3-[2,3,4,5,7,9,8,15,6]
4-[2,3,4,5,6,9,8,15,7]
5-[2,3,4,5,6,7,8,15,9]
6-[2,3,4,5,6,7,8,9,15]



[Merge Sort Projesi]

[16,21,11,8,12,22] -> Merge Sort
Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.

0-[16,21,11,8,12,22]
1-[16,21,11] [8,12,22]
2-[16] [21,11] [8,12] [22]
3-[16] [21]-[11] [8]-[12] [22]
4-[16]-[11,21] [8,12]-[22]
5-[11,16,21]-[8,12,22]
6-[8,11,12,16,21,22]
BigO :: O(n.logn)
