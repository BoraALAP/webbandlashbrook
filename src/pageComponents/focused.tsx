import React from "react"
import styled from "styled-components"
import InnerContent from "../components/ui/element/innerContent"
import PageTitle from "../components/ui/element/pageTitle"

const Focused = () => {
  return (
    <div id="about">

    <InnerContent move={50}>
      <PageTitle>Focused on the details</PageTitle>
      <h5>
        Webb and Lashbrook is a Toronto-based construction firm specializing in
        residential architecture. Working with architects, designers, and
        residential clients, our aptitude for constructing modern details in
        both new builds and renovation projects is underpinned by our sound team
        management, budgeting, and scheduling processes.
      </h5>
    </InnerContent>
    </div>
  )
}


export default Focused
