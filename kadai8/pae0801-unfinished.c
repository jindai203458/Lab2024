#include <stdio.h>
#define NLEN 14                                     // 名前の長さ
#define Lsize (sizeof(list) / sizeof(struct town))  // 町の数
struct town {
  int area, pop;
  char name[NLEN + 1];
};

double getDens(struct town t) {
  // ここを完成させる
}
void printTown(struct town t) {
  // ここを完成させる
  // area=XX pop=XX dens=X.XX name="XXXXXX"　の形式で出力
}
int main(void) {
  struct town list[] = {
      // 与えられる町の情報
      {33, 22, "honmachi"}, {30, 17, "kishine"},  {40, 18, "kosugi"},
      {12, 11, "kouen"},    {27, 35, "fujisawa"}, {50, 11, "kouza"},
      {17, 90, "musashi"},  {36, 13, "oono"},     {40, 53, "ootsuka"},
      {15, 86, "sagami"},   {20, 67, "shibuya"},  {34, 15, "uehara"},
      {18, 60, "yoyogi"}};
  // ここを完成させる
  return 0;
}
