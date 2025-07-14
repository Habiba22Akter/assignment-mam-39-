<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'] ?? '';
  $email = $_POST['email'] ?? '';

  if (!empty($name) && !empty($email)) {
    echo "Thank you, " . htmlspecialchars($name) . ". We have received your email: " . htmlspecialchars($email) . ".";
  } else {
    echo "Please fill in all fields.";
  }
} else {
  echo "Invalid request.";
}
?>

