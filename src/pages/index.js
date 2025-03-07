import React from "react"

import Page from "../components/page"
import Section from "../components/section"
import Intro from "../sections/intro"
import Spacer from "../components/spacer"
import Explanation from "../sections/explanation"
import CovidRules from "../sections/covid-rules"
import Schedule from "../sections/schedule"
import Sponsors from "../sections/sponsors"

const IndexPage = () => (
  <Page title="JSCraftCamp">
    <Section>
      <Intro />
      <Spacer size="xl" />
      <Explanation />
      <Spacer size="xl" />
      <Schedule />
      <Spacer size="xl" />
      <CovidRules />
      <Spacer size="xl" />
      <Sponsors />
    </Section>
  </Page>
)

export default IndexPage
