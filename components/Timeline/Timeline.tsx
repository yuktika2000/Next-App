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
              color: "#008C3B"
            },
            { 
              type: "Maturity Payout",
              name: "7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026",
              amount: "27,117.00",
              color: "#775DD0"
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
              color: "#775DD0"
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
              color: "#008C3B"
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
              color: "#775DD0"
            },
            { 
              type: "Interest Payout",
              name: "7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026",
              amount: "27,117.00",
              color: "#008C3B"
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="relative flex flex-col items-center px-4 py-12 min-h-screen">
      {items.map((yearItem, yIndex) => (
        <div key={yIndex} className="relative w-full" style={{ maxWidth: "800px" }}>

          {/* Year Block */}
          <div className="flex justify-center">
            <div className="bg-[#1a4d7b] text-white px-10 py-3 rounded-md shadow-lg text-center">
              <div className="font-bold text-lg">{yearItem.year}</div>
              <div className=" font-normal">
                Total Payouts: ₹ {yearItem.yearPayout}
              </div>
            </div>
          </div>

          {/* Timeline Container */}
          <div className={`relative ${yIndex === items.length - 1 ? "pb-88" : "pb-80"}`}>

            {/* Center Vertical Line */}
            <div
              className="absolute bg-[#e1e6e8]"
              style={{
                left: "50%",
                top: "0",
                height: "100%",
                width: "1px",
                transform: "translateX(-1px)",
              }}
            />

            {yearItem.events.map((event, eIndex) => (
              <div key={eIndex} className="relative mb-16">
                <div className="relative" style={{ minHeight: "160px" }}>

                  {/* LEFT SIDE */}
                  {event.side === "left" && (
                    <>
                      {/* Event Box */}
                      <div
                        className="absolute bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2"
                        style={{
                          right: "48%",
                          marginRight: "40px",
                          top: "35px",
                          minWidth: "160px",
                        }}
                      >
                        <div className="font-semibold  text-[#0C4580]">{event.date}</div>
                        <div className=" font-semibold">
                          Total Payouts: ₹ <span className="font-normal">{event.totalPayout}</span> 
                        </div>

                        {/* ▶ Triangle */}
                        <div
                          style={{
                            position: "absolute",
                            right: "-9px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: 0,
                            height: 0,
                            borderTop: "8px solid transparent",
                            borderBottom: "8px solid transparent",
                            borderLeft: "8px solid #9BC1E3",
                          }}
                        />
                      </div>

                      {/* Event Dot */}
                      <div
                        className="absolute bg-[#9BC1E3] rounded-full border-4 border-white shadow-md"
                        style={{
                          left: "50%",
                          top: "60px",
                          width: "16px",
                          height: "16px",
                          transform: "translateX(-8px)",
                          zIndex: 10,
                        }}
                      />

                      {/* Vertical line from Event Dot to Payouts */}
                      <div
                        className="absolute bg-gray-300"
                        style={{
                          left: "42%",
                          top: "99px",
                          width: "1px",
                          height:yIndex === items.length - 1? `${event.payouts.length * 60}px`: `${event.payouts.length * 120}px`,
                          transform: "translateX(-50%)",
                          zIndex: 1,
                        }}
                      />

                      {/* Payout Boxes */}
                      <div
                        className="absolute flex flex-col gap-8"
                        style={{
                          right: "60%",
                          marginRight: "15px",
                          top: "132px",
                          width: "300px",
                        }}
                      >
                        {event.payouts.map((payout, pIndex) => (
                          <div key={pIndex} className="relative">

                            {/* Horizontal line connecting vertical line to payout */}
                            <div
                              className="absolute bg-gray-300"
                              style={{
                                width: "30px",
                                height: "1px",
                                top: "28px",
                                right: "-30px",
                              }}
                            />

                            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                              <span
                                className={` font-semibold px-2 py-1 rounded ${
                                  payout.color === "#008C3B"
                                    ? "bg-[#008C3B] text-white"
                                    : "bg-[#775DD0] text-white"
                                }`}
                              >
                                {payout.type}
                              </span>
                              <div className=" font-bold mt-2">{payout.name}</div>
                              <div className=" font-bold">Amount: ₹ <span className="font-normal">{payout.amount}</span></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* RIGHT SIDE */}
                  {event.side === "right" && (
                    <>
                      {/* Event Box */}
                      <div
                        className="absolute bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2"
                        style={{
                          left: "48%",
                          marginLeft: "40px",
                          top: yIndex === items.length - 1 ? "140px" : "270px",
                          minWidth: "160px",
                        }}
                      >
                        <div className="font-semibold ">{event.date}</div>
                        <div className=" font-semibold">
                          Total Payouts: ₹ <span className="font-normal">{event.totalPayout}</span>
                        </div>

                        {/* ▶ Triangle */}
                        <div
                          style={{
                            position: "absolute",
                            left: "-8px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: 0,
                            height: 0,
                            borderTop: "8px solid transparent",
                            borderBottom: "8px solid transparent",
                            borderRight: "8px solid #9BC1E3",
                          }}
                        />
                      </div>

                      {/* Event Dot */}
                      <div
                        className="absolute bg-[#9BC1E3] rounded-full border-4 border-white shadow-md"
                        style={{
                          left: "50%",
                          top: yIndex === items.length - 1 ? "166px" : "295px",
                          width: "16px",
                          height: "16px",
                          transform: "translateX(-8px)",
                          zIndex: 10,
                        }}
                      />

                      {/* Vertical line from Event Dot to Payouts */}
                      <div
                        className="absolute bg-gray-300"
                        style={{
                          left: "60%",
                          top: yIndex === items.length - 1 ? "208px" : "335px",
                          width: "1px",
                          height: yIndex === items.length - 1 ?`${event.payouts.length * 127}px`:`${event.payouts.length * 80}px` ,
                          transform: "translateX(-50%)",
                          zIndex: 1,
                        }}
                      />

                      {/* Payout Boxes */}
                      <div
                        className="absolute flex flex-col gap-8"
                        style={{
                          left: "60%",
                          marginLeft: "41px",
                          top: yIndex === items.length - 1 ? "240px" : "358px",
                          width: "300px",
                        }}
                      >
                        {event.payouts.map((payout, pIndex) => (
                          <div key={pIndex} className="relative">

                            {/* Horizontal line connecting vertical line to payout */}
                            <div
                              className="absolute bg-gray-300"
                              style={{
                                width: "41px",
                                height: "1px",
                                top: "58px",
                                left: "-40px",
                              }}
                            />

                            <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                              <span
                                className={` font-semibold px-2 py-1 rounded ${
                                  payout.color === "#008C3B"
                                    ? "bg-[#008C3B] text-white"
                                    : "bg-[#775DD0] text-white"
                                }`}
                              >
                                {payout.type}
                              </span>
                              <div className=" font-bold mt-2">{payout.name}</div>
                              <div className=" font-bold">Amount: ₹ <span className="font-normal">{payout.amount}</span></div>
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

          {/* END FLAG */}
          {yIndex === items.length - 1 && (
            <div className="flex justify-center">
              <div className="bg-[#1a4d7b] text-white px-12 py-4 rounded-md shadow-lg">
                <img src="/flag.svg" alt="Flag" className="w-[18px] h-[18px]" />
              </div>
            </div>
          )}

        </div>
      ))}
    </div>
  );
}
