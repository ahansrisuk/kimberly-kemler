import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Poem from "../components/poem"
import SEO from "../components/seo"

import Circle from "../images/circle.svg"

const Poems = () => (
<Layout>
    <SEO title="Poems" />
    <div className="w-full flex items-center flex-col">
        <Navbar />
        {/* list of poems */}
        <div className="w-4/5 h-full flex items-center">
            <table className="table-fixed w-full z-10">
                <thead>
                    <th className="w-2/3"></th>
                    <th className="w-1/3"></th>
                </thead>
                <tbody>
                    <Poem 
                        name="From Oblivious Waters"
                        publication="Rattle">
                    </Poem>
                    <Poem 
                        name="Ode to the Quick Brown Fox"
                        publication="TSR Online">
                    </Poem>
                    <Poem 
                        name="Retronyms"
                        publication="2 Bridges Review">
                    </Poem>
                    <Poem 
                        name="Rite of Commital"
                        publication="Split Rock Review">
                    </Poem>
                    <Poem 
                        name="Harvey"
                        publication="Salamander">
                    </Poem>
                    <Poem 
                        name="County Fair"
                        publication="Salamander">
                    </Poem>
                    <Poem 
                        name="On the Indian River"
                        publication="Salamander">
                    </Poem>
                    <Poem 
                        name="On Kajii Motojiro's (Alleged) Jellyfish"
                        publication="CutBank">
                    </Poem>
                </tbody>
            </table>
            <div className="absolute left-0 z-0">
                <img src={Circle} alt="circle" className="ml-24" />
            </div>
        </div>
    </div>
</Layout>
)

export default Poems 
