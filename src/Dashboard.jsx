import admin1 from './assets/admin1.svg';
import admin2 from './assets/admin2.svg';
import admin3 from './assets/admin3.svg';
import admin4 from './assets/admin4.svg';
import admin5 from './assets/admin5.svg';
import admin6 from './assets/admin6.svg';

export default function Dashboard() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen w-full p-[40px]">
      {/* Dashboard Breadcrumb */}
      <div className="mb-[30px]">
        <p className=" leading-[normal] not-italic text-[20px] text-black mb-[16px]">
          Dashboard
        </p>
        <h1 className=" leading-[normal] not-italic text-[36px] text-black mb-[8px]">
          Dashboard Overviews
        </h1>
        <p className=" leading-[normal] not-italic text-[16px] text-[rgba(0,0,0,0.59)]">
          Welcome back, here's what's happening today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="flex gap-[24px] mb-[24px]">
        {/* Total Views Card */}
        <div className="bg-white flex-1 h-[124px] relative rounded-[12px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)]">
          <div className="absolute left-[24px] top-[24px]">
            <p className=" leading-[normal] not-italic text-[14px] text-[#6B7280] mb-[8px]">
              Total Views
            </p>
            <p className=" leading-[normal] not-italic text-[32px] text-[#6366F1]">
              4,592
            </p>
          </div>
          <div className="absolute right-[24px] top-[24px] w-[40px] h-[40px] bg-[#EEF2FF] rounded-[8px] flex items-center justify-center">
            {/* <svg className="w-[20px] h-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
              <path d={svgPaths.p1406af80} stroke="#6366F1" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.pb57f900} stroke="#6366F1" strokeLinejoin="round" strokeWidth="2" />
            </svg> */}
            <img src={admin4} alt="Total Views" className="w-[20px] h-[20px]" />
          </div>
        </div>

        {/* Active Services Card */}
        <div className="bg-white flex-1 h-[124px] relative rounded-[12px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)]">
          <div className="absolute left-[24px] top-[24px]">
            <p className=" leading-[normal] not-italic text-[14px] text-[#6B7280] mb-[8px]">
              Active Services
            </p>
            <p className=" leading-[normal] not-italic text-[32px] text-[#6366F1]">
              3
            </p>
          </div>
          <div className="absolute right-[24px] top-[24px] w-[40px] h-[40px] bg-[#EEF2FF] rounded-[8px] flex items-center justify-center">
            {/* <svg className="w-[20px] h-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
              <path d={svgPaths.p372eb700} stroke="#6366F1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg> */}
            <img src={admin5} alt="Active Services" className="w-[20px] h-[20px]" />
          </div>
        </div>

        {/* Published Blogs Card */}
        <div className="bg-white flex-1 h-[124px] relative rounded-[12px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)]">
          <div className="absolute left-[24px] top-[24px]">
            <p className=" leading-[normal] not-italic text-[14px] text-[#6B7280] mb-[8px]">
              Published Blogs
            </p>
            <p className=" leading-[normal] not-italic text-[32px] text-[#6366F1]">
              250
            </p>
          </div>
          <div className="absolute right-[24px] top-[24px] w-[40px] h-[40px] bg-[#EEF2FF] rounded-[8px] flex items-center justify-center">
            {/* <svg className="w-[20px] h-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
              <path d={svgPaths.p32041600} stroke="#6366F1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg> */}
            <img src={admin6} alt="Published Blogs" className="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>

      {/* Traffic Analytics Section */}
      <div className="bg-white rounded-[12px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)] p-[24px] mb-[24px]">
        <div className="flex items-center justify-between mb-[32px]">
          <p className=" leading-[normal] not-italic text-[18px] text-black">
            Traffic Analytics
          </p>
          {/* <svg className="w-[20px] h-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
            <path d={svgPaths.p310f0080} stroke="#6366F1" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2" />
          </svg> */}
        </div>
        
        {/* Chart */}
        <div className="flex gap-[32px] items-end justify-center h-[280px]">
          {/* January */}
          <div className="flex flex-col items-center justify-end h-full w-[48px]">
            <div className="bg-[#A5B4FC] w-full rounded-t-[6px]" style={{height: '100px'}} />
            <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] text-center mt-[8px]">Jan</p>
          </div>
          
          {/* February */}
          <div className="flex flex-col items-center justify-end h-full w-[48px]">
            <div className="bg-[#A5B4FC] w-full rounded-t-[6px]" style={{height: '133px'}} />
            <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] text-center mt-[8px]">Feb</p>
          </div>
          
          {/* March */}
          <div className="flex flex-col items-center justify-end h-full w-[48px]">
            <div className="bg-[#A5B4FC] w-full rounded-t-[6px]" style={{height: '66px'}} />
            <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] text-center mt-[8px]">Mar</p>
          </div>
          
          {/* April */}
          <div className="flex flex-col items-center justify-end h-full w-[48px]">
            <div className="bg-[#A5B4FC] w-full rounded-t-[6px]" style={{height: '156px'}} />
            <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] text-center mt-[8px]">Apr</p>
          </div>
          
          {/* May */}
          <div className="flex flex-col items-center justify-end h-full w-[48px]">
            <div className="bg-[#A5B4FC] w-full rounded-t-[6px]" style={{height: '190px'}} />
            <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] text-center mt-[8px]">May</p>
          </div>
          
          {/* June */}
          <div className="flex flex-col items-center justify-end h-full w-[48px]">
            <div className="bg-[#A5B4FC] w-full rounded-t-[6px]" style={{height: '80px'}} />
            <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] text-center mt-[8px]">Jun</p>
          </div>
          
          {/* July */}
          <div className="flex flex-col items-center justify-end h-full w-[48px]">
            <div className="bg-[#A5B4FC] w-full rounded-t-[6px]" style={{height: '120px'}} />
            <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] text-center mt-[8px]">July</p>
          </div>
          
          {/* August - Highest */}
          <div className="flex flex-col items-center justify-end h-full w-[48px]">
            <div className="bg-[#6366F1] w-full rounded-t-[6px]" style={{height: '240px'}} />
            <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] text-center mt-[8px]">Aug</p>
          </div>
          
          {/* September */}
          <div className="flex flex-col items-center justify-end h-full w-[48px]">
            <div className="bg-[#A5B4FC] w-full rounded-t-[6px]" style={{height: '180px'}} />
            <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] text-center mt-[8px]">Sep</p>
          </div>
          
          {/* October */}
          <div className="flex flex-col items-center justify-end h-full w-[48px]">
            <div className="bg-[#A5B4FC] w-full rounded-t-[6px]" style={{height: '100px'}} />
            <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] text-center mt-[8px]">Oct</p>
          </div>
          
          {/* November */}
          <div className="flex flex-col items-center justify-end h-full w-[48px]">
            <div className="bg-[#A5B4FC] w-full rounded-t-[6px]" style={{height: '200px'}} />
            <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] text-center mt-[8px]">Nov</p>
          </div>
          
          {/* December */}
          <div className="flex flex-col items-center justify-end h-full w-[48px]">
            <div className="bg-[#A5B4FC] w-full rounded-t-[6px]" style={{height: '170px'}} />
            <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] text-center mt-[8px]">Dec</p>
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="bg-white rounded-[12px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)] p-[32px] mb-[24px]">
        <div className="mb-[8px]">
          <h2 className=" leading-[normal] not-italic text-[20px] text-black mb-[4px]">
            Blogs
          </h2>
          <p className=" leading-[normal] not-italic text-[14px] text-[#6B7280]">
            Content Status and publish queue
          </p>
        </div>

        <div className="flex gap-[48px] mt-[24px]">
          {/* Status Section */}
          <div className="flex-1">
            <p className=" leading-[normal] not-italic text-[16px] text-black mb-[16px]">
              Status
            </p>
            
            <div className="flex gap-[32px]">
              {/* Total Blogs Box */}
              <div className="bg-gradient-to-br from-[#818CF8] to-[#6366F1] rounded-[12px] px-[32px] py-[24px] min-w-[180px]">
                <p className=" leading-[normal] not-italic text-[16px] text-white text-center mb-[4px]">
                  Total Blogs
                </p>
                <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic text-[32px] text-white text-center">
                  250+
                </p>
              </div>

              {/* Status List */}
              <div className="flex-1">
                {/* Published */}
                <div className="flex items-center justify-between py-[12px] border-b border-[#E5E7EB]">
                  <p className=" leading-[normal] not-italic text-[15px] text-[#10B981]">
                    Published
                  </p>
                  <p className=" leading-[normal] not-italic text-[15px] text-[#10B981]">
                    186
                  </p>
                </div>

                {/* Draft */}
                <div className="flex items-center justify-between py-[12px] border-b border-[#E5E7EB]">
                  <p className=" leading-[normal] not-italic text-[15px] text-[#6B7280]">
                    Draft
                  </p>
                  <p className=" leading-[normal] not-italic text-[15px] text-[#6B7280]">
                    36
                  </p>
                </div>

                {/* Archived */}
                <div className="flex items-center justify-between py-[12px] border-b border-[#E5E7EB]">
                  <p className=" leading-[normal] not-italic text-[15px] text-[#EF4444]">
                    Archived
                  </p>
                  <p className=" leading-[normal] not-italic text-[15px] text-[#EF4444]">
                    10
                  </p>
                </div>

                {/* Scheduled */}
                <div className="flex items-center justify-between py-[12px]">
                  <p className=" leading-[normal] not-italic text-[15px] text-[#F59E0B]">
                    Scheduled
                  </p>
                  <p className=" leading-[normal] not-italic text-[15px] text-[#F59E0B]">
                    15
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Blogs */}
          <div className="w-[340px]">
            <p className=" leading-[normal] not-italic text-[16px] text-black mb-[16px]">
              Recent Blogs
            </p>
            
            <div className="space-y-[12px] max-h-[240px] overflow-y-auto">
              {/* Blog Item 1 */}
              <div className="flex gap-[12px] pb-[12px] border-b border-[#E5E7EB]">
                <img src="" alt="" className="w-[48px] h-[48px] rounded-[6px] object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className=" leading-[1.3] not-italic text-[13px] text-black mb-[4px] line-clamp-2">
                    5 Website Design Fails That Drivers Visitors Away
                  </p>
                  <div className="flex items-center justify-between">
                    <p className=" leading-[normal] not-italic text-[11px] text-[#6B7280]">
                      Website Development
                    </p>
                    <span className=" leading-[normal] not-italic text-[11px] text-[#F59E0B]">
                      Scheduled
                    </span>
                  </div>
                </div>
              </div>

              {/* Blog Item 2 */}
              <div className="flex gap-[12px] pb-[12px] border-b border-[#E5E7EB]">
                <img src="" alt="" className="w-[48px] h-[48px] rounded-[6px] object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className=" leading-[1.3] not-italic text-[13px] text-black mb-[4px] line-clamp-2">
                    Resume Success Formula: How to Land Interviews Faster
                  </p>
                  <div className="flex items-center justify-between">
                    <p className=" leading-[normal] not-italic text-[11px] text-[#6B7280]">
                      Resume Building
                    </p>
                    <span className=" leading-[normal] not-italic text-[11px] text-[#10B981]">
                      Published
                    </span>
                  </div>
                </div>
              </div>

              {/* Blog Item 3 */}
              <div className="flex gap-[12px] pb-[12px] border-b border-[#E5E7EB]">
                <img src="" alt="" className="w-[48px] h-[48px] rounded-[6px] object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className=" leading-[1.3] not-italic text-[13px] text-black mb-[4px] line-clamp-2">
                    5 Powerful Words for Resume Building That Get You Hired
                  </p>
                  <div className="flex items-center justify-between">
                    <p className=" leading-[normal] not-italic text-[11px] text-[#6B7280]">
                      Resume Building
                    </p>
                    <span className=" leading-[normal] not-italic text-[11px] text-[#10B981]">
                      Published
                    </span>
                  </div>
                </div>
              </div>

              {/* Blog Item 4 */}
              <div className="flex gap-[12px] pb-[12px] border-b border-[#E5E7EB]">
                <img src="" alt="" className="w-[48px] h-[48px] rounded-[6px] object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className=" leading-[1.3] not-italic text-[13px] text-black mb-[4px] line-clamp-2">
                    The Hidden Dangers of Outdated Websites
                  </p>
                  <div className="flex items-center justify-between">
                    <p className=" leading-[normal] not-italic text-[11px] text-[#6B7280]">
                      Website Development
                    </p>
                    <span className=" leading-[normal] not-italic text-[11px] text-[#10B981]">
                      Published
                    </span>
                  </div>
                </div>
              </div>

              {/* Blog Item 5 */}
              <div className="flex gap-[12px]">
                <img src="" alt="" className="w-[48px] h-[48px] rounded-[6px] object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className=" leading-[1.3] not-italic text-[13px] text-black mb-[4px] line-clamp-2">
                    7 Resume Mistakes to Avoid That Turn Recruiters Away
                  </p>
                  <div className="flex items-center justify-between">
                    <p className=" leading-[normal] not-italic text-[11px] text-[#6B7280]">
                      Resume Building
                    </p>
                    <span className=" leading-[normal] not-italic text-[11px] text-[#10B981]">
                      Published
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview Section */}
      <div className="bg-white rounded-[12px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)] p-[32px] mb-[24px]">
        <div className="mb-[24px]">
          <h2 className=" leading-[normal] not-italic text-[20px] text-black mb-[4px]">
            Services Overview
          </h2>
          <p className=" leading-[normal] not-italic text-[14px] text-[#6B7280]">
            Performance metrics and client status per service.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[24px]">
          {/* Website Development Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-[24px] relative">
            <div className="flex items-start justify-between mb-[16px]">
              <div className="w-[48px] h-[48px] bg-[#6366F1] rounded-[12px] flex items-center justify-center">
                {/* <svg className="w-[24px] h-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                  <path d={svgPaths.p3b035680} fill="white" />
                </svg> */}
                <img src={admin1} alt="Website Development" className="w-[24px] h-[24px]" />
              </div>
              <span className="bg-[#D1FAE5] text-[#059669] px-[12px] py-[4px] rounded-[16px] text-[12px]  flex items-center gap-[4px]">
                <span className="w-[6px] h-[6px] bg-[#059669] rounded-full" />
                Active
              </span>
            </div>
            <p className=" leading-[normal] not-italic text-[16px] text-black mb-[20px] text-center">
              Website Development
            </p>
            <div className="grid grid-cols-2 gap-[16px]">
              <div>
                <p className=" leading-[normal] not-italic text-[12px] text-[#6B7280] mb-[4px]">
                  Clients
                </p>
                <p className=" leading-[normal] not-italic text-[15px] text-black">
                  14 Active
                </p>
              </div>
              <div>
                <p className=" leading-[normal] not-italic text-[12px] text-[#6B7280] mb-[4px]">
                  Ongoing
                </p>
                <p className=" leading-[normal] not-italic text-[15px] text-black">
                  6 Projects
                </p>
              </div>
              <div className="col-span-2">
                <p className=" leading-[normal] not-italic text-[12px] text-[#6B7280] mb-[4px]">
                  Completed
                </p>
                <p className=" leading-[normal] not-italic text-[15px] text-black">
                  10 Projects
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Management Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-[24px] relative">
            <div className="flex items-start justify-between mb-[16px]">
              <div className="w-[48px] h-[48px] bg-[#6366F1] rounded-[12px] flex items-center justify-center">
                {/* <svg className="w-[24px] h-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                  <g clipPath="url(#clip0_social)">
                    <path d={svgPaths.p4ef2620} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p14280500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p2f460060} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p137639c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_social">
                      <rect fill="white" height="35" width="35" />
                    </clipPath>
                  </defs>
                </svg> */}
                <img src={admin2} alt="Social Media Management" className="w-[24px] h-[24px]" />
              </div>
              <span className="bg-[#D1FAE5] text-[#059669] px-[12px] py-[4px] rounded-[16px] text-[12px]  flex items-center gap-[4px]">
                <span className="w-[6px] h-[6px] bg-[#059669] rounded-full" />
                Active
              </span>
            </div>
            <p className=" leading-[normal] not-italic text-[16px] text-black mb-[20px] text-center">
              Social Media Management
            </p>
            <div className="grid grid-cols-2 gap-[16px]">
              <div>
                <p className=" leading-[normal] not-italic text-[12px] text-[#6B7280] mb-[4px]">
                  Clients
                </p>
                <p className=" leading-[normal] not-italic text-[15px] text-black">
                  22 Active
                </p>
              </div>
              <div>
                <p className=" leading-[normal] not-italic text-[12px] text-[#6B7280] mb-[4px]">
                  Ongoing
                </p>
                <p className=" leading-[normal] not-italic text-[15px] text-black">
                  22 Campaigns
                </p>
              </div>
              <div className="col-span-2">
                <p className=" leading-[normal] not-italic text-[12px] text-[#6B7280] mb-[4px]">
                  Completed
                </p>
                <p className=" leading-[normal] not-italic text-[15px] text-black">
                  10 Projects
                </p>
              </div>
            </div>
          </div>

          {/* Resume Building Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-[24px] relative">
            <div className="flex items-start justify-between mb-[16px]">
              <div className="w-[48px] h-[48px] bg-[#6366F1] rounded-[12px] flex items-center justify-center">
                {/* <svg className="w-[24px] h-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5 34.5">
                  <path d={svgPaths.p449d780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p5926b00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p32b03400} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M6 21H23.5" stroke="white" strokeLinecap="round" strokeWidth="2" />
                  <path d="M6 27.25H16" stroke="white" strokeLinecap="round" strokeWidth="2" />
                </svg> */}
                <img src={admin3} alt="Resume Building" className="w-[24px] h-[24px]" />
              </div>
              <span className="bg-[#FEE2E2] text-[#DC2626] px-[12px] py-[4px] rounded-[16px] text-[12px]  flex items-center gap-[4px]">
                <span className="w-[6px] h-[6px] bg-[#DC2626] rounded-full" />
                Inactive
              </span>
            </div>
            <p className=" leading-[normal] not-italic text-[16px] text-black mb-[20px] text-center">
              Resume Building
            </p>
            <div className="grid grid-cols-2 gap-[16px]">
              <div>
                <p className=" leading-[normal] not-italic text-[12px] text-[#6B7280] mb-[4px]">
                  Clients
                </p>
                <p className=" leading-[normal] not-italic text-[15px] text-black">
                  0 Active
                </p>
              </div>
              <div>
                <p className=" leading-[normal] not-italic text-[12px] text-[#6B7280] mb-[4px]">
                  Ongoing
                </p>
                <p className=" leading-[normal] not-italic text-[15px] text-black">
                  0 Projects
                </p>
              </div>
              <div className="col-span-2">
                <p className=" leading-[normal] not-italic text-[12px] text-[#6B7280] mb-[4px]">
                  Completed
                </p>
                <p className=" leading-[normal] not-italic text-[15px] text-black">
                  40 Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications & Alerts Section */}
      <div className="bg-white rounded-[12px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)] p-[32px]">
        <div className="flex items-center justify-between mb-[24px]">
          <h2 className=" leading-[normal] not-italic text-[20px] text-black">
            Notifications & Alerts
          </h2>
          <button className="bg-[#6366F1] text-white px-[20px] py-[10px] rounded-[8px]  text-[14px] hover:bg-[#4F46E5] transition-colors">
            Mark all read
          </button>
        </div>

        <div className="space-y-[16px] max-h-[400px] overflow-y-auto">
          {/* Notification 1 - New Lead Alert */}
          <div className="flex gap-[16px] pb-[16px] border-b border-dashed border-[#E5E7EB]">
            <div className="w-[8px] h-[8px] bg-[#EF4444] rounded-full mt-[6px] flex-shrink-0" />
            <div className="flex-1">
              <p className=" leading-[normal] not-italic text-[15px] text-black mb-[4px]">
                New Lead Alert
              </p>
              <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] mb-[4px]">
                John Doe signed up for a trial account
              </p>
              <p className=" leading-[normal] not-italic text-[12px] text-[#9CA3AF]">
                Just now
              </p>
            </div>
          </div>

          {/* Notification 2 - Client Message */}
          <div className="flex gap-[16px] pb-[16px] border-b border-dashed border-[#E5E7EB]">
            <div className="w-[8px] h-[8px] bg-[#EF4444] rounded-full mt-[6px] flex-shrink-0" />
            <div className="flex-1">
              <p className=" leading-[normal] not-italic text-[15px] text-black mb-[4px]">
                Client Message Received
              </p>
              <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] mb-[4px]">
                Lily William sent a message regarding Project Alpha.
              </p>
              <p className=" leading-[normal] not-italic text-[12px] text-[#9CA3AF]">
                2 hours ago
              </p>
            </div>
          </div>

          {/* Notification 3 - Payment Pending */}
          <div className="flex gap-[16px] pb-[16px] border-b border-dashed border-[#E5E7EB]">
            <div className="w-[8px] h-[8px] bg-[#D1D5DB] rounded-full mt-[6px] flex-shrink-0" />
            <div className="flex-1">
              <p className=" leading-[normal] not-italic text-[15px] text-black mb-[4px]">
                Payment Pending Reminder
              </p>
              <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] mb-[4px]">
                Invoice #1023 is overdue by 3 days.
              </p>
              <p className=" leading-[normal] not-italic text-[12px] text-[#9CA3AF]">
                5 hours ago
              </p>
            </div>
          </div>

          {/* Notification 4 - Client Message (read) */}
          <div className="flex gap-[16px]">
            <div className="w-[8px] h-[8px] bg-[#D1D5DB] rounded-full mt-[6px] flex-shrink-0" />
            <div className="flex-1">
              <p className=" leading-[normal] not-italic text-[15px] text-black mb-[4px]">
                Client Message Received
              </p>
              <p className=" leading-[normal] not-italic text-[13px] text-[#6B7280] mb-[4px]">
                Lily William sent a message regarding Project Alpha.
              </p>
              <p className=" leading-[normal] not-italic text-[12px] text-[#9CA3AF]">
                2 hours ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
