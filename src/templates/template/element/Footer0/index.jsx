import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './index.less';

class Footer extends React.Component {
  static propTypes = {
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'footer0',
  };

  render() {
    const dataSource = this.props.dataSource;
    const props = { ...this.props };
    const names = props.id.split('_');
    const name = `${names[0]}${names[1]}`;
    delete props.dataSource;
    return (<OverPack
      {...props}
      playScale={0.05}
      hideProps={{ footer: { reverse: true } }}
      style={dataSource[name].style}
    >
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="footer"
      >
        <span
          dangerouslySetInnerHTML={{ __html: dataSource[`${name}_content`].children }}
          style={dataSource[`${name}_content`].style}
          id={`${props.id}-content`}
        />
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
