export default function Header(){
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="font-semibold text-xl">clonechatgpt</div>
        <nav className="space-x-4">
          <a className="text-sm text-gray-600 hover:text-gray-900" href="#">Home</a>
          <a className="text-sm text-gray-600 hover:text-gray-900" href="#">About</a>
        </nav>
      </div>
    </header>
  )
}
