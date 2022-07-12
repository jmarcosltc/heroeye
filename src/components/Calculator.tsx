import React, { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer} from "recharts";

export default function Calculator() {

    // Magic find   
    const [magicFind = 0, setMagicFind] = useState<any | null>(null);

    // Aditional magic Find Rows
    //          AMFR
    // const amfr = magicFind / 2200

    // Tier deciding magic find
    const tdmg = magicFind * 0.01

    // MF additional rows = 0.1181
    // 0.8
    // 2.6

    // B = 0
    // A = 1
    // S = 2
    // CHASE = 3
    // ANGELIC = 4

    var [dropRolls, setDropRolls] = useState<any | null>(null);

    var [notSatanic = 0, setNotSatanic] = useState<any | null>(null);
    var [B = 0, setB] = useState<any | null>(null);
    var [A = 0, setA] = useState<any | null>(null);
    var [S = 0, setS] = useState<any | null>(null);
    var [CHASE = 0, setCHASE] = useState<any | null>(null);
    var [ANGELIC = 0, setANGELIC] = useState<any | null>(null);

    // Rolls

    const roll = () => {

        var changingNS = 0
        var changingB = 0
        var changingA = 0
        var changingS = 0
        var changingCHASE = 0
        var changingANGELIC = 0
        
        const sixthRoll = () => {
            let num = Math.random() * (100 - 0) + 0;
            
            if (num <= (42 + tdmg)) {
                changingANGELIC++
            } else {
                changingNS++;
            }
        }
    
        const fifithRoll = () => {
            let num = Math.random() * (100 - 0) + 0;
    
            if (num <= (42 + tdmg)) {
                sixthRoll()
            } else {
                changingCHASE++
            }
        }
    
        const forthRoll = () => {
            let num = Math.random() * (100 - 0) + 0;
    
            if (num <= (42 + tdmg)) {
                fifithRoll()
            } else {
                changingS++
            }
        }
    
        const thirdRoll = () => {
            let num = Math.random() * (100 - 0) + 0;
    
            if (num <= (42 + tdmg)) {
                forthRoll()
            } else {
                changingA++;
            }
        }
    
        const secondRoll = () => {
            let num = Math.random() * (100 - 0) + 0;
            
            if (num <= (44 + tdmg)) {
                thirdRoll() 
            } else {
                changingB++
            }
    
        }
    
        const firstRoll = () => {
        let num = Math.random() * (100 - 0) + 0;
    
            if (num <= (46 + tdmg)) {
                secondRoll() 
            } else {
                changingNS++;
            }
    
        }

        for (let i = 0; i < dropRolls; i++) {
            firstRoll()
        }

        setNotSatanic(changingNS)
        setB(changingB)
        setA(changingA)
        setS(changingS)
        setCHASE(changingCHASE)
        setANGELIC(changingANGELIC)

    }

    

    const calculateOdds = () => {
        roll()    
    }

    // Chart.register(ArcElement, Tooltip, Legend);


    const data = [
        { name: 'Group notSatanic', value: notSatanic },
        { name: 'Group B', value: B },
        { name: 'Group A', value: A },
        { name: 'Group S', value: S },
        { name: 'Group CHASE', value: CHASE },
        { name: 'Group ANGELIC', value: ANGELIC },
      ];

    const COLORS = ['#a83246', '#a83293', '#FFBB28', '#3279a8', '#171761', '#34eb34'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index } : {cx: any, cy: any, midAngle: any, innerRadius: any, outerRadius: any,
        percent: any, index: any }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    }
    

    return(
        <>

            <div>
                <p>Magic find value: </p>
                <input type="number" aria-label="Ex: 450" pattern="[0-9]+" onChange={(e) => setMagicFind(e.target.value)}/>
            </div>

            <div>
                <p>Number of rolls: </p>
                <input type="number" aria-label="Ex: 450" pattern="[0-9]+" onChange={(e) => setDropRolls(e.target.value)}/>
            </div>


                <h1>Magic find: {magicFind}%</h1>

                <button onClick={() => calculateOdds()}> Calculate the odds </button>

                <h2>Not Satanic: {notSatanic}</h2>
                <h2>Tier B: {B}</h2>
                <h2>Tier A: {A}</h2>
                <h2>Tier S: {S}</h2>
                <h2>Tier HEROIC: {CHASE}</h2>
                <h2> Tier ANGELIC: {ANGELIC}</h2>
                
            
            
            <br/>
            <h1>Probability chart: </h1>
            <ResponsiveContainer width="99%" aspect={8}>
            <PieChart width={800} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                </PieChart>
                </ResponsiveContainer>
            
        </>
    );
}


//export default Calculator;