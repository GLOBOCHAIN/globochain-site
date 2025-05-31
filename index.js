
export default function HomePage() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold text-blue-700 text-center">GLOBOCHAIN</h1>
      <p className="text-center text-gray-600 mt-4">
        Une solution QR code santé pour voyageurs assurés
      </p>
      <div className="mt-10 text-center">
        <a href="/faq" className="text-blue-500 underline mx-4">FAQ</a>
        <a href="/pro" className="text-blue-500 underline mx-4">Espace Pro</a>
      </div>
    </div>
  );
}
