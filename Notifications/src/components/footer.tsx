export function Footer() {
return (
    <footer className=" py-4 border-t border-gray-300 mt-4">
        <div className="container mx-auto flex justify-between items-center">
            <div>
                <span className="text-gray-500">© 2024 Instagram for Dummies</span>
            </div>
            <div>
            <ul className=" md:flex hidden space-x-4">
                <li><a href="#" className="text-gray-500 hover:text-gray-700">About</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Help</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Press</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">API</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Jobs</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Privacy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Terms</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Locations</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Top Accounts</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Hashtags</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Language</a></li>
            </ul>
            </div>
        </div>
    </footer>
)}