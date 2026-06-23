import Link from "next/link";
import { Star, Camera } from "lucide-react";

export default function MilestonesPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold font-baloo text-gray-900 mb-6">
            Celebrate Every <span className="text-[#F3C68F]">First</span>
          </h1>
          <p className="text-xl font-nunito text-gray-600 max-w-2xl mx-auto">
            From their first smile to their first steps, capture the magic of early childhood with our premium, beautifully illustrated milestone cards.
          </p>
        </div>

        {/* Milestone Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-[#F4EFE6]">
            <div className="w-16 h-16 bg-[#A8DADC] rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">Picture Perfect Memories</h2>
            <p className="text-lg font-nunito text-gray-600 mb-8">
              Crafted with anti-glare, non-toxic matte paper, our cards look beautiful in photos and are completely safe for your little one to hold and explore.
            </p>
            <ul className="space-y-4 font-nunito text-gray-700 font-medium">
              <li className="flex items-center gap-3"><Star className="w-5 h-5 text-[#F3C68F] fill-current" /> 24 beautifully illustrated cards</li>
              <li className="flex items-center gap-3"><Star className="w-5 h-5 text-[#F3C68F] fill-current" /> Rounded edges for ultimate safety</li>
              <li className="flex items-center gap-3"><Star className="w-5 h-5 text-[#F3C68F] fill-current" /> Space on the back to write memories</li>
            </ul>
          </div>
          
          {/* Placeholder for 3D Milestone Card Viewer */}
          <div className="h-[500px] bg-white rounded-3xl border-4 border-dashed border-[#F4EFE6] flex flex-col items-center justify-center p-8 text-center shadow-sm">
            <span className="text-gray-400 font-poppins font-medium mb-2">Interactive 3D Preview Area</span>
            <p className="text-sm font-nunito text-gray-500">Drop your React Three Fiber milestone card component here.</p>
          </div>
        </div>

      </div>
    </main>
  );
}