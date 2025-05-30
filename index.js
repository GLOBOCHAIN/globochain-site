
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700">GLOBOCHAIN</h1>
      <p className="text-center mt-4 text-gray-600">
        Solution QR code santé pour voyageurs assurés
      </p>
      <div className="text-center mt-10">
        <a href="/faq" className="text-blue-500 underline mx-4">FAQ</a>
        <a href="/pro" className="text-blue-500 underline mx-4">Espace Pro</a>
      </div>
    </div>
  );
}
