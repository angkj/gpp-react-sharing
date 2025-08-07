import { PowerPointPresentation, Slide } from "../shared/components/powerpoint";

const HomePage = () => {
  return (
    <PowerPointPresentation>
      <Slide>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              Welcome to React 101
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Navigate through this presentation using the arrow buttons or keyboard arrows
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-700">Your Learning Journey Starts Here</h2>
            <p className="text-lg text-gray-600">
              Master React concepts, hooks, and best practices through interactive examples
            </p>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              Getting Started
            </h1>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Let's explore the fundamental building blocks of React applications
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-700">Core Concepts</h2>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Components</h3>
                <p className="text-gray-600">Building blocks of React applications</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Hooks</h3>
                <p className="text-gray-600">Powerful features for state and effects</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide background="bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              React Hooks
            </h1>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Hooks let you use state and other React features without writing a class
          </div>

          <div className="mt-12 space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">useState</h3>
                <p className="text-sm text-gray-600">Manage component state</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">useEffect</h3>
                <p className="text-sm text-gray-600">Handle side effects</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">useContext</h3>
                <p className="text-sm text-gray-600">Share data globally</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide background="bg-gradient-to-br from-purple-50 to-violet-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              Performance
            </h1>
            <div className="w-24 h-1 bg-violet-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Optimize your React applications for better user experience
          </div>

          <div className="mt-12 space-y-6">
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">useMemo</h3>
                <p className="text-gray-600">Memoize expensive calculations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">useCallback</h3>
                <p className="text-gray-600">Memoize function references</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide background="bg-gradient-to-br from-orange-50 to-amber-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              Best Practices
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Follow these guidelines to write clean, maintainable React code
          </div>

          <div className="mt-12 space-y-6">
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Keep components small and focused</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Use meaningful component and variable names</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Avoid deep prop drilling with Context</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Handle loading and error states</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide background="bg-gradient-to-br from-red-50 to-pink-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              Thank You!
            </h1>
            <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Ready to start building amazing React applications?
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-700">Next Steps</h2>
            <div className="text-lg text-gray-600 space-y-2">
              <p>🚀 Explore the sidebar to dive into specific hooks</p>
              <p>💡 Try the interactive demos and examples</p>
              <p>🎯 Practice with real-world scenarios</p>
            </div>
          </div>
        </div>
      </Slide>
    </PowerPointPresentation>
  );
};

export default HomePage;
