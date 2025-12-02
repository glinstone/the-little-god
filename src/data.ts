export type ARTICLE_SLUG = keyof typeof ARTICLE_TITLES;

export const ARTICLES: ARTICLE_SLUG[] = [
  '1-an-ge-la-tu', // 1.《安哥拉兔》
  '2-yu-yan-he-zhe-xue-jia', // 2.《语言和哲学家》
  '3-chao-jia', // 3.《吵架》
  '4-zhang-lang', // 4.《蟑螂》
  '5-da-xing-xing-ren', // 5.《大猩猩人》
  '6-shang-di', // 6.《上帝》
  '7-xue-wen', // 7.《学问》
  '8-jian-shang-jia', // 8.《鉴赏家》
  '9-shuo-fa', // 9.《说法》
  '10-li-wei-tan', // 10.《利维坦》
  '11-qi-qiu', // 11.《气球》
  '12-huai-xiang', // 12.《怀想》
  '13-lan-se-de-qi', // 13.《蓝色的七》
  '14-tian-tang', // 14.《天堂》
  '15-bu-cun-zai', // 15.《不存在》
  '16-bei-ge', // 16.《悲歌》
];

export const ARTICLE_TITLES = {
  '1-an-ge-la-tu': '《安哥拉兔》',
  '2-yu-yan-he-zhe-xue-jia': '《语言和哲学家》',
  '3-chao-jia': '《吵架》',
  '4-zhang-lang': '《蟑螂》',
  '5-da-xing-xing-ren': '《大猩猩人》',
  '6-shang-di': '《上帝》',
  '7-xue-wen': '《学问》',
  '8-jian-shang-jia': '《鉴赏家》',
  '9-shuo-fa': '《说法》',
  '10-li-wei-tan': '《利维坦》',
  '11-qi-qiu': '《气球》',
  '12-huai-xiang': '《怀想》',
  '13-lan-se-de-qi': '《蓝色的七》',
  '14-tian-tang': '《天堂》',
  '15-bu-cun-zai': '《不存在》',
  '16-bei-ge': '《悲歌》',
} as const;
