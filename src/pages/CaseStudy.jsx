import { useParams, Navigate } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { caseStudySeo } from "../data/seo";
import LidarCaseStudy from "../components/LidarCaseStudy";
import SpaceRadarCaseStudy from "../components/SpaceRadarCaseStudy";

const stories = {
  lidar: LidarCaseStudy,
  "space-radar": SpaceRadarCaseStudy,
};

export default function CaseStudy() {
  const { slug } = useParams();
  const Story = stories[slug];

  useSEO(caseStudySeo[slug] ?? caseStudySeo.lidar);

  if (!Story) {
    return <Navigate to="/work" replace />;
  }

  return <Story />;
}
