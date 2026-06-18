import { useEffect } from "react";
import { Link } from "react-router-dom";
import Figure from "../../components/exploration/Figure";
import WavefrontCanvas from "../../components/exploration/WavefrontCanvas";
import ArrayFactorCanvas from "../../components/exploration/ArrayFactorCanvas";

export default function BeamSteering() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ln-article">
      <header className="ln-article-header">
        <Link to="/#lightnotes" className="ln-back">
          ← Back to portfolio
        </Link>
        <div className="section-eyebrow">Light Notes</div>
        <h1 className="ln-article-title">Steering Light with No Moving Parts</h1>
        <p className="ln-article-standfirst">
          Your phone moves a lens to focus. A radar dish rotates to scan the sky.
          But there is a way to aim a beam of light anywhere you like — instantly,
          with absolutely nothing moving. It is the idea behind solid-state LiDAR,
          endoscopic imaging probes, and radar that flies in orbit.
        </p>
      </header>

      <article className="ln-prose">
        <p>
          The trick is not to move the light, but to <em>reshape</em> it. And to
          see how, we need to start with a single, humble source of light.
        </p>

        <h2>One source spreads out</h2>
        <p>
          A tiny emitter does not send light in a straight line. It radiates
          outward in expanding waves, like ripples from a stone dropped in a
          pond. On its own, it illuminates everything in front of it more or less
          equally — useless if you want a beam pointed in one direction.
        </p>
        <p>
          The magic begins when you have <strong>more than one</strong>.
        </p>

        <h2>Two sources, and the birth of a direction</h2>
        <p>
          Place two emitters side by side and let them emit in step. Where the
          crests of their waves line up, the light reinforces and grows bright.
          Where a crest meets a trough, they cancel and go dark. This is
          interference, and it carves the uniform glow into distinct bright lobes
          pointing in specific directions.
        </p>
        <p>
          Now nudge one source slightly out of step with the other — give it a{" "}
          <em>phase offset</em> — and watch what happens to those bright lobes in
          the figure below.
        </p>

        <Figure
          number={1}
          caption="Two coherent sources interfering. Bright bands are directions where the waves reinforce. Sliding the phase offset swings those directions — already a primitive way to steer light. Wider spacing splits the light into more lobes."
        >
          <WavefrontCanvas />
        </Figure>

        <p>
          That swing is the whole secret in miniature. By controlling nothing but
          the <em>timing</em> of the light leaving each source, we changed the
          direction it travels. No mirrors turned. No lenses moved.
        </p>

        <h2>Many sources make a beam</h2>
        <p>
          Two emitters give you broad, fuzzy lobes. But line up a whole row of
          them, all emitting in step, and their waves reinforce sharply in one
          direction and cancel almost everywhere else. The result is a single
          tight beam pointing straight ahead. The more emitters you add, the
          narrower and cleaner that beam becomes.
        </p>
        <p>
          Physicists call the resulting intensity pattern the{" "}
          <em>array factor</em>. The plot below shows it directly: the height of
          the curve is how much light goes in each direction. Add emitters and
          watch the central spike sharpen.
        </p>

        <h2>Tilting the wavefront steers the beam</h2>
        <p>
          Here is the step that makes it useful. Instead of giving every emitter
          the same timing, apply a steadily increasing delay across the row — each
          one a little later than its neighbour. The combined wavefront tilts, and
          the whole beam swings to a new angle. Because that delay is set
          electronically, the beam can be repointed in nanoseconds.
        </p>

        <Figure
          number={2}
          caption="Far-field intensity of an N-element phased array. 'Number of emitters' sharpens the main beam; 'steering angle' applies a progressive phase delay that tilts it; 'emitter pitch' is the spacing between emitters — push it past about half a wavelength and ghost beams (grating lobes) appear."
        >
          <ArrayFactorCanvas />
        </Figure>

        <h2>The catch: ghost beams</h2>
        <p>
          There is a price. If the emitters sit too far apart, the math that
          produces one clean beam also produces perfect copies of it at other
          angles — <em>grating lobes</em>. Slide the pitch up in the figure above
          and you will see them march into view. To a LiDAR or a radar, a ghost
          beam is an ambiguity: a target it cannot tell apart from the real one.
          Keeping emitters close enough together to avoid this — while still
          fitting all the control wiring — is one of the central tensions in real
          designs.
        </p>

        <h2>From physics to a real chip</h2>
        <p>
          On a photonic chip I designed, sixteen emitters spaced just under three
          wavelengths apart produced a beam about 1.7° wide, steerable across a 20°
          field — fast enough and fine enough for real imaging. The hardest part
          was not the physics but the imperfection: fabrication tolerances mean no
          two emitters actually start in step. Each one's phase had to be
          individually calibrated before the array would form a clean beam at all.
        </p>
        <p>
          That gap between the elegant equation and the stubborn, slightly-wrong
          real device is, to me, where most of the interesting engineering lives.
        </p>

        <h2>Where this is heading</h2>
        <p>
          Solid-state beam steering is quietly moving from the lab into the world:
          compact LiDAR for cars that has no spinning turret, endoscopic probes
          that scan tissue with no moving tip, and phased-array systems light
          enough to fly. All of it rests on the same idea you just played with —
          that to point light somewhere, you do not have to move anything at all.
          You just have to change when it leaves.
        </p>

        <div className="ln-article-footer">
          <Link to="/#lightnotes" className="ln-back">
            ← Back to portfolio
          </Link>
        </div>
      </article>
    </div>
  );
}
