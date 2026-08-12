import { useParams, Navigate } from "react-router-dom";
import LidarCaseStudy from "../components/LidarCaseStudy";
import SpaceRadarCaseStudy from "../components/SpaceRadarCaseStudy";

const stories = {
  lidar: LidarCaseStudy,
  "space-radar": SpaceRadarCaseStudy,
};

export default function CaseStudy() {
  const { slug } = useParams();
  const Story = stories[slug];

  if (!Story) {
    return <Navigate to="/work" replace />;
  }

  return <Story />;
}
