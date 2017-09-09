import React from 'react';
import Container from '../components/Container';

import SVG from 'svg.js';

// const g = 0.5;

// class Particle {
//   constructor(draw, x, y) {
//     this.draw = draw;
//     this.x = x;
//     this.y = y;
//     this.vx = Math.random() * 10;
//     this.vy = 0;
//     this.sizeX = 20;
//     this.sizeY = 20;
//     this.color = 'hsl(' + Math.random() * 360 + ',100%,50%)';
//   }

//   draw() {
//     this.draw
//       .ellipse(this.sizex, this.sizey)
//       .fill(this.color)
//       .move(this.x, this.y);
//   }

//   move() {
//     this.y += this.vy;
//     this.x += this.vx;
//     if (this.y > this.draw.height) {
//       this.vy = -this.vy;
//     } else this.vy += g;
//     if (this.x > this.draw.width || this.x < 0) this.vx = -this.vx;
//   }
// }

class Particle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cx: props.cx || 10,
      cy: props.cy || 10,
      vx: Math.random() * 10,
      vy: 0.2,
      r: 20,
      height: 20,
      fill: 'hsl(' + Math.random() * 360 + ',100%,50%)'
    };
  }

  move() {
    let {cx, cy, vx, vy} = this.state;
    if (cx > this.props.maxWidth || cx < 0) vx = -vx;
    if (cy > this.props.maxHeight) cy = -cy;

    this.setState(state => ({
      cy: cy + vy,
      cx: cx + vx,
      vx,
      vy
    }));
  }

  componentDidMount() {
    this.move();
  }

  componentDidUpdate() {
    setTimeout(this.move.bind(this), 10);
  }

  render() {
    return <circle {...this.state}>{this.props.children}</circle>;
  }
}

export class SVGPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      particles: []
    };
  }
  svgRender() {
    this.draw = SVG(this.svg).size('100%', '100%');
    // const rect = this.draw.attr({fill: '#f06'});
    // rect.animate().size(150, 150);
    // draw.clear();

    const particles = [];
    for (let i = 0; i < 1; i++) {
      const x = Math.random() * 10;
      const y = Math.random() * 10;
      particles.push({x, y});
    }

    this.setState(() => ({
      particles: this.state.particles.concat(particles)
    }));
  }

  componentDidMount() {
    this.svgRender();
  }
  componentWillUpdate() {
    setTimeout(this.svgRender.bind(this), 1000);
  }

  render() {
    return (
      <Container>
        <h2>SVG</h2>
        <svg ref={svg => (this.svg = svg)}>
          {this.state.particles.map(({x, y}) => {
            return (
              <Particle
                maxWidth={this.svg.clientWidth}
                maxHeight={this.svg.clientHeight}
                key={`${x}x${y}`}
                cx={x}
                cy={y}
                r={Math.random() * 10}
              />
            );
          })}
        </svg>
      </Container>
    );
  }
}

export default SVGPage;
