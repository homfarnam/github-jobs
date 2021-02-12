import React from "react"
import { useState } from "react"
import { useQuery } from "react-query"
import Layout from "../Layout/Layout"
import { NextPage } from "next"
import styled from "styled-components"

interface IndexPageProps {
  id: number | string
  index: any
  title: string
  company: string
  type: string
  location: string
  company_logo: string
}

const Card = styled.div`
  width: 350px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 1.25rem;
  margin: 2.5rem;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
`

const CompanyLogos = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  top: 70px;
  left: 86px;
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
`

const MyJobs = styled.div`
  --tw-text-opacity: 1;
  color: rgba(252, 165, 165, var(--tw-text-opacity));
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  flex-wrap: wrap;

  width: 75%;
  text-align: left;
`

const fetchJobs = async (key: { [x: string]: any }): Promise<any> => {
  const res = await fetch(
    `https://jobs.github.com/positions.json?description=${key["queryKey"][0]}&location=${key["queryKey"][1]}&page=${key["queryKey"][2]}`,
  )
  // const res1 = `https://jobs.github.com/positions.json?description=${key["queryKey"][0]}&location=${key["queryKey"][1]}&page=${key["queryKey"][2]}`
  // console.log("res: ", res1)

  // console.log("location: ", key["queryKey"][2])
  return res.json()
}

export const IndexPage: NextPage<IndexPageProps> = () => {
  const [MyLocation, setMyLocation] = useState<string>("")
  const [Page, setPage] = useState<number>(1)
  const [Description, setDescription] = useState<string>("")
  const [FullTime, setFullTime] = useState<string>()

  const { data, status } = useQuery(
    [Description, MyLocation, Page],
    fetchJobs,
    {
      keepPreviousData: true,
      cacheTime: 10,
      staleTime: 200,
    },
  )

  return (
    <>
      <Layout
        title="Home | Github Jobs"
        setMyLocation={setMyLocation}
        MyLocation={MyLocation}
        setDescription={setDescription}
        Description={Description}
        // setFullTime={setFullTime}
      >
        <div className="flex flex-row w-full justify-around items-center pt-10 mx-auto px-10">
          <button
            className="bg-gradient-to-r from-red-300 to-blue-400 rounded-xl p-2"
            onClick={() => setPage((prev) => prev - 1)}
            disabled={Page === 1}
          >
            Previous Page
          </button>
          <p>{Page}</p>
          <button
            className="bg-gradient-to-r from-purple-200 to-blue-500 rounded-xl p-2"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next Page
          </button>
        </div>
        <MyJobs>
          {status === "loading" && <div>Loading fetching data...</div>}

          {status === "error" && <div>Error fetching data</div>}

          {status === "success" ? (
            <>
              {data.map(
                ({
                  id,
                  index,
                  title,
                  company,
                  type,
                  location,
                  company_logo,
                }: IndexPageProps) => (
                  <>
                    <div className="flex flex-col" key={id}>
                      {company_logo ? (
                        <CompanyLogos>
                          <img
                            src={company_logo}
                            alt={company}
                            className="bg-cover"
                          />
                        </CompanyLogos>
                      ) : (
                        <CompanyLogos>Logo</CompanyLogos>
                      )}

                      <Card key={id}>
                        <p className="text-gray-400 mt-2">{type}</p>

                        <p
                          className=" text-black font-black text-2xl w-11/12"
                          key={index}
                        >
                          {title}
                        </p>
                        <p className="text-gray-400">{company}</p>
                        <p className="text-blue-500">{location}</p>
                      </Card>
                    </div>
                  </>
                ),
              )}
            </>
          ) : (
            ""
          )}
        </MyJobs>
      </Layout>
    </>
  )
}

export default IndexPage
