
export default function FaqPage() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-2xl font-semibold mb-4">FAQ - Questions fréquentes</h1>
      <ul className="space-y-3 text-gray-700">
        <li><strong>Comment mes données sont-elles protégées ?</strong> Hébergées localement, cryptées et accessibles uniquement via QR sécurisé.</li>
        <li><strong>Qui peut accéder à mes informations ?</strong> Seuls les professionnels de santé et l’assurance avec les bons accès.</li>
        <li><strong>Que faire en cas de perte du QR code ?</strong> Contactez l’assureur pour en générer un nouveau.</li>
      </ul>
    </div>
  );
}
