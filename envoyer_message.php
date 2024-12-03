<?php
if (isset($_POST['nom']) && isset($_POST['email']) && isset($_POST['message'])) {
  $to = 'votre_adresse_email@domaine.com';
  $subject = 'Nouveau message de ' . $_POST['nom'];
  $message = $_POST['message'];
  $headers = 'From: ' . $_POST['email'];

  if (mail($to, $subject, $message, $headers)) {
    echo 'Le message a été envoyé avec succès.';
  } else {
    echo 'Une erreur s\'est produite. Veuillez réessayer plus tard.';
  }
}
?>
