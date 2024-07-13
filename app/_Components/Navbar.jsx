import React from 'react'

function Navbar() {
  return (
    <div>
        <nav class="bg-opacity-50 bg-blur backdrop-filter backdrop-blur-lg py-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            {/* <!-- Logo --> */}
            <div class="flex-shrink-0">
                <a href="/" class="flex items-center">
                    <img class="h-8 w-auto" src="/path/to/logo.png" alt="Logo"/>
                    <span class="text-white text-lg font-bold ml-2">Your Logo</span>
                </a>
            </div>
            {/* <!-- Navigation Links --> */}
            <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</a>
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </div>
            </div>
        </div>
    </div>
</nav>
    </div>
  )
}

export default Navbar