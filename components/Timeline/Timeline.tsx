"use client";

export default function Timeline() {
  const items = [
    {
      year: "2025",
      yearPayout: "2,01,120.00",
      events: [
        {
          date: "22 Jan 2025",
          totalPayout: "49,127.00",
          side: "left",
          payouts: [
            { 
              type: "Interest Payout",
              name: "7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026",
              amount: "27,117.00",
              color: "green"
            },
            { 
              type: "Maturity Payout",
              name: "7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026",
              amount: "27,117.00",
              color: "purple"
            },
          ],
        },
        {
          date: "28 Dec 2025",
          totalPayout: "1,51,993",
          side: "right",
          payouts: [
            { 
              type: "Maturity Payout",
              name: "0% EDELWEISS FINANCIAL SERVICES LIMITED 01/Feb/2027",
              amount: "1,51,993.00",
              color: "purple"
            },
          ],
        },
      ],
    },
    {
      year: "2026",
      yearPayout: "2,01,120.00",
      events: [
        {
          date: "01 Feb 2026",
          totalPayout: "49,127.00",
          side: "left",
          payouts: [
            { 
              type: "Interest Payout",
              name: "7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026",
              amount: "49,127.00",
              color: "green"
            },
          ],
        },
        {
          date: "01 Aug 2026",
          totalPayout: "1,51,993",
          side: "right",
          payouts: [
            { 
              type: "Maturity Payout",
              name: "7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026",
              amount: "1,51,993.00",
              color: "purple"
            },
            { 
              type: "Interest Payout",
              name: "7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026",
              amount: "27,117.00",
              color: "green"
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="relative flex flex-col items-center px-4 py-12  min-h-screen">
      {items.map((yearItem, yIndex) => (
        <div key={yIndex} className="relative w-full" style={{ maxWidth: '800px' }}>
          {/* Year Block */}
          <div className="flex justify-center">
            <div className="bg-[#1a4d7b] text-white px-10 py-3 rounded-md shadow-lg text-center">
              <div className="font-bold text-lg">{yearItem.year}</div>
              <div className="text-sm font-normal">Total Payouts: ₹ {yearItem.yearPayout}</div>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative pb-15">
            {/* Vertical Line - centered */}
            <div 
              className="absolute bg-gray-300" 
              style={{
                left: '50%',
                top: '0',
                bottom: '0',
                width: '2px',
                transform: 'translateX(-1px)'
              }}
            />

            {yearItem.events.map((event, eIndex) => (
              <div key={eIndex} className="relative mb-16">
                <div className="relative" style={{ minHeight: '160px' }}>
                  {/* LEFT SIDE */}
                  {event.side === 'left' && (
                    <>
                      {/* Date Box - Left */}
                      <div 
                        className="absolute bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2"
                        style={{
                          right: '50%',
                          marginRight: '40px',
                          top: '35px',
                          minWidth: '160px'
                        }}
                      >
                        <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                          <span className="font-semibold text-sm">{event.date}</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-semibold">Total Payouts: ₹ {event.totalPayout}</span>
                        </div>
                      </div>


                      {/* Timeline Dot */}
                      <div 
                        className="absolute bg-blue-400 rounded-full border-4 border-white shadow-md"
                        style={{
                          left: '50%',
                          top: '55px',
                          width: '16px',
                          height: '16px',
                          transform: 'translateX(-8px)',
                          zIndex: 10
                        }}
                      />

                      {/* Payout Cards - Below on Left */}
                      <div 
                        className="absolute flex flex-col gap-8"
                        style={{
                          right: '50%',
                          marginRight: '40px',
                          top: '132px',
                          width: '300px'
                        }}
                      >
                        {event.payouts.map((payout, pIndex) => (
                          <div key={pIndex} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                            <div className="flex items-start justify-between mb-2">
                              <span className={`text-sm font-semibold px-2 py-1 rounded ${
                                payout.color === 'green' 
                                  ? 'bg-green-600 text-white' 
                                  : 'bg-purple-600 text-white'
                              }`}>
                                {payout.type}
                              </span>
                              <button className="w-4 h-4 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                i
                              </button>
                            </div>
                            <div className="text-sm font-bold mb-1 leading-tight">{payout.name}</div>
                            <div className="text-sm">
                              <span className="font-bold">Amount: ₹ {payout.amount}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* RIGHT SIDE */}
                  {event.side === 'right' && (
                    <>
                      {/* Date Box - Right */}
                      <div 
                        className="absolute bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2"
                        style={{
                          left: '50%',
                          marginLeft: '40px',
                          top: '310px',
                          minWidth: '160px'
                        }}
                      >
                        <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                          <span className="font-semibold text-sm">{event.date}</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-semibold">Total Payouts: ₹ {event.totalPayout}</span>
                        </div>
                      </div>


                      {/* Timeline Dot */}
                      <div 
                        className="absolute bg-blue-400 rounded-full border-4 border-white shadow-md"
                        style={{
                          left: '50%',
                          top: '270px',
                          width: '16px',
                          height: '16px',
                          transform: 'translateX(-8px)',
                          zIndex: 10
                        }}
                      />

                      {/* Payout Cards - Below on Right */}
                      <div 
                        className="absolute flex flex-col gap-3"
                        style={{
                          left: '50%',
                          marginLeft: '40px',
                          top: '398px',
                          width: '300px'
                        }}
                      >
                        {event.payouts.map((payout, pIndex) => (
                          <div key={pIndex} className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                            <div className="flex items-start justify-between mb-2">
                              <span className={`text-sm font-semibold px-2 py-1 rounded ${
                                payout.color === 'green' 
                                  ? 'bg-green-600 text-white' 
                                  : 'bg-purple-600 text-white'
                              }`}>
                                {payout.type}
                              </span>
                              <button className="w-4 h-4 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                i
                              </button>
                            </div>
                            <div className="text-sm font-bold mb-1 leading-tight">{payout.name}</div>
                            <div className="text-sm">
                              <span className="font-bold">Amount: ₹ {payout.amount}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Year Block */}
          {yIndex === items.length - 1 && (
            <div className="flex justify-center mt-20">
              <div className="bg-[#1a4d7b] text-white px-12 py-4 rounded-md shadow-lg">
                <div className="text-3xl">🏁</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}