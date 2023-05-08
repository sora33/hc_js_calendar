// カレンダーを表示する関数
function printCalendar(year, month) {
  // 指定された年月の最初の日を取得
  const firstDay = new Date(year, month, 1);
  // 指定された年月の最後の日を取得
  const lastDay = new Date(year, month + 1, 0);
  
  // 曜日の配列を定義
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  // カレンダーのヘッダーを作成
  const header = `      ${month}月 ${year}
 ${days.join(" ")}
`;

  // カレンダーの本体部分を作成
  let calendar = "";
  let dayCounter = 1;

  // 5週間分のループ
  for (let i = 0; i < 5; i++) {
    let week = [];
    // 1週間分のループ
    for (let j = 0; j < 7; j++) {
      // 最初の週でまだ開始日に達していないか、最後の日を超えた場合
      if ((i === 0 && j < firstDay.getDay()) || dayCounter > lastDay.getDate()) {
        week.push("   ");
      } else {
        // 日付を週に追加　文字数が3文字になるようにスペースを追加
        week.push((" " + dayCounter).slice(-2) + " ");
        dayCounter++;
      }
    }
    // 週をカレンダーに追加
    calendar += week.join("") + "\n";
  }

  // カレンダーを表示
  console.log(header + calendar);
}

// コマンドライン引数を取得　
// node calendar.js -m 9の場合、argsは["-m", "9"]になる
const args = process.argv.slice(2);
// 現在の日付を取得
let date = new Date();

// -mオプションが指定された場合
if (args.length === 2 && args[0] === "-m") {
  const month = args[1];

  // 不正な月が指定された場合はエラーを表示
  if (month < 1 || month > 12) {
    console.error("エラー: 不正な月を指定しています。 1から12の間で指定してください。");
    process.exit(1);
  }

  // 指定された月のカレンダーを表示
  printCalendar(date.getFullYear(), month);
} else if (args.length === 0) {
  // 引数が指定されない場合、現在の月のカレンダーを表示
  printCalendar(date.getFullYear(), date.getMonth());
} else {
  // 不正な引数が指定された場合はエラーを表示
  console.error("エラー: 不正な引数です。-m 9のように指定してください。");
  process.exit(1);
}
