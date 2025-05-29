import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-row">
      {/* Left side: Dashboard content */}
      <div className="flex-1 bg-[#f7f9fa] p-10">
        <h1 className="text-4xl font-black mb-1 border-b-4 border-[#179b98] inline-block">
          My Dashboard
        </h1>
        <p className="text-gray-500 mb-8">your recent activity</p>
        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-300 mb-4">
          <button className="text-[#179b98] border-b-2 border-[#179b98] pb-2 px-2 font-medium">
            Quick status
          </button>
          <button className="text-gray-500 pb-2 px-2">Upcoming Events</button>
          <button className="text-gray-500 pb-2 px-2">Pending forms</button>
        </div>
        {/* Top cards */}
        <div className="flex gap-6 mb-6">
          <div className="bg-white rounded-xl shadow p-4 w-64">
            <h3 className="font-semibold mb-2">Pending Forms</h3>
            <ul className="text-gray-700 text-sm">
              <li className="flex justify-between items-center mb-1">
                Dcomdads{" "}
                <span className="bg-red-500 text-white rounded-full px-2 text-xs">
                  !
                </span>
              </li>
              <li className="flex justify-between items-center mb-1">
                Studbarks{" "}
                <span className="bg-red-500 text-white rounded-full px-2 text-xs">
                  !
                </span>
              </li>
              <li className="flex justify-between items-center">
                Sandra Express{" "}
                <span className="bg-red-500 text-white rounded-full px-2 text-xs">
                  !
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-4 w-64">
            <h3 className="font-semibold mb-2">Active Bookings</h3>
            <ul className="text-gray-700 text-sm">
              <li>Bothell Pops</li>
              <li>Recess Balloons</li>
              <li>S&O Lighting</li>
            </ul>
          </div>
        </div>
        {/* Pending Forms Details */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Pending Forms</h3>
          <div className="bg-white rounded-xl shadow p-4 mb-4">
            <div className="flex justify-between items-center cursor-pointer">
              <span className="font-medium">Dcomdads</span>
              <span className="text-xs text-gray-400">▼</span>
            </div>
            <div className="ml-2 mt-2">
              <div className="text-xs text-gray-600 mb-1">
                Approval Status Tracker
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-green-400 h-2 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <div className="text-xs text-gray-600">Food Form</div>
              <div className="text-xs text-gray-600">
                Temporary Food Service Permit
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <div className="flex justify-between items-center cursor-pointer">
              <span className="font-medium">S&O Lighting</span>
              <span className="text-xs text-gray-400">▼</span>
            </div>
            <div className="ml-2 mt-2">
              <div className="text-xs text-gray-600 mb-1">
                Approval Status Tracker
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-green-400 h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <div className="text-xs text-gray-600">Food Form</div>
              <div className="text-xs text-gray-600">
                Temporary Food Service Permit
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right side: Calendar and Tasks */}
      <div className="w-[40%] min-h-screen bg-[#179b98] flex flex-col items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-6 w-[350px]">
          <h3 className="font-semibold mb-4">Todays Task</h3>
          <ul className="mb-4 text-sm text-gray-700">
            <li>
              <input type="checkbox" className="mr-2" />
              Call Pauline
            </li>
            <li>
              <input type="checkbox" className="mr-2" />
              Submit Food Form
            </li>
            <li>
              <input type="checkbox" className="mr-2" />
              Create Schedule
            </li>
            <li>
              <input type="checkbox" className="mr-2" />
              Edit Guide
            </li>
            <li>
              <input type="checkbox" className="mr-2" />
              Submit Food Form
            </li>
          </ul>
          {/* Calendar mockup */}
          <div className="border rounded-lg p-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">&lt;</span>
              <span className="text-sm font-medium">May 2025</span>
              <span className="text-sm">&gt;</span>
            </div>
            <div className="grid grid-cols-7 text-xs text-center text-gray-500 mb-1">
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 text-center text-gray-700">
              <div className="text-gray-300"> </div>
              <div className="text-gray-300"> </div>
              <div className="text-gray-300"> </div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
              <div>16</div>
              <div>17</div>
              <div>18</div>
              <div>19</div>
              <div>20</div>
              <div>21</div>
              <div>22</div>
              <div>23</div>
              <div>24</div>
              <div>25</div>
              <div>26</div>
              <div>27</div>
              <div>28</div>
              <div>29</div>
              <div>30</div>
              <div>31</div>
              <div className="text-gray-300"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}