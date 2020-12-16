import Layout from "../Layout/Layout"
import { NextPage } from "next"
import styled from "styled-components"

interface IndexPageProps {
  index: any
  title: string
  company: string
  type: string
}

const Card = styled.div`
  width: 350px;
  height: 250px;
`

export const IndexPage: NextPage<IndexPageProps> = ({ jobs }: any) => {
  return (
    <>
      <Layout title="Home | Github Jobs">
        <div className="flex flex-row m-auto justify-center items-center mt-10 w-9/12 text-left flex-wrap text-red-300">
          {jobs.map(({ index, title, company, type }: IndexPageProps) => (
            <Card className="flex flex-col w-64 h-64 p-5 m-10 bg-white ">
              <p className="text-gray-400">{type}</p>
              <p
                className="mb-3 text-black font-black text-2xl w-11/12"
                key={index}
              >
                {title}
              </p>
              <p>company: {company}</p>
            </Card>
          ))}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://jobs.github.com/positions.json`)
  const jobs = await res.json()

  if (!jobs) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      jobs,
    }, // will be passed to the page component as props
  }
}

export default IndexPage
