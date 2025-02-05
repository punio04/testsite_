<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<?php
// フォームから送信されたデータを取得
$company = $_POST['company'] ?? '';
$name = $_POST['name'] ?? '';
$postal = $_POST['postal'] ?? '';
$address = $_POST['address'] ?? '';
$phone = $_POST['phone'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// 送信先メールアドレス
$to = "gude_0417@icloud.com";  // ここに自分のメールアドレスを入れる

// メールの件名
$subject = "【お問い合わせ】" . $name . "様より";

// メール本文
$body = "会社名: " . htmlspecialchars($company) . "\n";
$body .= "お名前: " . htmlspecialchars($name) . "\n";
$body .= "郵便番号: " . htmlspecialchars($postal) . "\n";
$body .= "住所: " . htmlspecialchars($address) . "\n";
$body .= "電話番号: " . htmlspecialchars($phone) . "\n";
$body .= "メールアドレス: " . htmlspecialchars($email) . "\n";
$body .= "お問い合わせ内容:\n" . htmlspecialchars($message);

// メールのヘッダー情報
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

// メール送信処理
if (mail($to, $subject, $body, $headers)) {
  header("Location: thanks.html");
  exit;
} else {
  error_log("メール送信失敗: " . print_r(error_get_last(), true)); // ログに出力
  echo "メールの送信に失敗しました。もう一度お試しください。";
}


if (mail($to, "テスト", "これはテストメールです", "From: gude_0417@icloud.com")) {
  echo "送信成功！";
} else {
  echo "送信失敗！";
}
