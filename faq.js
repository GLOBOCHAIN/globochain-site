
export default function FaqPage() {
  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-2xl font-semibold mb-4">FAQ - Questions Fréquentes</h1>
      <ul className="space-y-3 text-gray-700">
        <li><strong>Comment mes données sont-elles protégées ?</strong> Hébergées localement et cryptées avec QR code sécurisé.</li>
        <li><strong>Qui peut accéder ?</strong> Seuls les professionnels autorisés avec mot de passe temporaire.</li>
        <li><strong>Perte de QR code ?</strong> Régénérez-le depuis votre espace sécurisé.</li>
      </ul>
    </div>
  );
}
