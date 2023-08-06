#include <stdio.h>

int kaijou(int n) {
  int r;
  printf("開始 n=%d\n", n);
  if (n == 1) {
    r = 1;
  } else {
    r = n * kaijou(n - 1);
  }
  printf("終了 n=%d, r=%d\n", n, r);
  return r;
}

int main(void) {
  int x, k;

  printf("nを入力: ");
  scanf("%d", &x);
  k = kaijou(x);
  printf("%dの階乗は%d\n", x, k);

  return 0;
}
/*
nを入力: 5
開始 n=5
開始 n=4
開始 n=3
開始 n=2
開始 n=1
終了 n=1,1
終了 n=2,2
終了 n=3,6
終了 n=4,24
終了 n=5,120
5の階乗は120
*/