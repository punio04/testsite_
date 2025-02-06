<?php
// フォームからデータを受け取る
$company = htmlspecialchars($_POST['company']);
$name = htmlspecialchars($_POST['name']);
$postal = htmlspecialchars($_POST['postal']);
$address = htmlspecialchars($_POST['address']);
$phone = htmlspecialchars($_POST['phone']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

// メールの送信設定
$to = "akari_0417@i.softbank.jp"; // ここを自分のメールアドレスに変えてね
$subject = "【お問い合わせ】$name 様より";
$body = "会社名: $company\n"
  . "お名前: $name\n"
  . "郵便番号: $postal\n"
  . "住所: $address\n"
  . "電話番号: $phone\n"
  . "メールアドレス: $email\n"
  . "お問い合わせ内容:\n$message";

// メールのヘッダー情報
$headers = "From: $email";

// メール送信
if (mail($to, $subject, $body, $headers)) {
  // 成功したらサンクスページへリダイレクト
  header("Location: thanks.html");
  exit();
} else {
  echo "エラー: メールの送信に失敗しました。";
}

?>

