#include <stdio.h>
#define NLEN 14                                     // 名前の長さ
#define Lsize (sizeof(list) / sizeof(struct town))  // 町の数
struct town {
  int area, pop;
  char name[NLEN + 1];
};
double getDens(struct town t) { return (double)t.pop / t.area; }
void printTown(struct town t) {
  printf("area=%d pop=%d ", t.area, t.pop);
  printf("dens=%4.2f ", getDens(t));
  printf("name=%s¥n", t.name);
  // area=XX pop=XX dens=X.XX name="XXXXXX"
}
int main(void) {
  struct town list[] = {
      // 与えられる町の情報
      {33, 22, "honmachi"}, {30, 17, "kishine"},  {40, 18, "kosugi"},
      {12, 11, "kouen"},    {27, 35, "fujisawa"}, {50, 11, "kouza"},
      {17, 90, "musashi"},  {36, 13, "oono"},     {40, 53, "ootsuka"},
      {15, 86, "sagami"},   {20, 67, "shibuya"},  {34, 15, "uehara"},
      {18, 60, "yoyogi"}};
  int i, mi;
  double d, md;
  mi = 0;
  md = getDens(list[0]);
  for (i = 0; i < Lsize; i++) {
    d = getDens(list[i]);
    if (d > md) {
      md = d;
      mi = i;
    }
  }
  printTown(list[mi]);
  return 0;
}

/*
課題１・解答例（実行結果）
area=15 pop=86 dens=5.73 name="sagami"
*/