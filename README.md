## javascriptでカレンダーを作る

`$ cal`で表示されるカレンダーを作ってみよう。ターミナルで`cal`と入力してイメージを掴もう。

イメージ
```
➜ node calendar.js
      2月 2022
 日 月 火  水 木 金 土
       1  2  3  4  5
 6  7  8  9 10 11 12
13 14 15 16 17 18 19
20 21 22 23 24 25 26
27 28
```

## 必須要件

- macに入っているcalコマンドと同じ見た目になっていること
- ライブラリは使わないこと
- `-m`オプションで月を指定できるようにすること。今年が2022年なら `cal -m 6`で2022年6月のカレンダーになる。
- 引数を指定しない場合は、今月・今年のカレンダーが表示される
- `-m`の引数が不正な月の場合はエラーを出すこと　

## 課題(終了条件)

- pull requestのREADMEに以下のコマンドすべての実行結果のスクリーンショットを記載すること

```
cal
```

```
cal -m 6
```

```
cal -m 100
```