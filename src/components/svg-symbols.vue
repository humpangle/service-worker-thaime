<script>
const SVG_LIB = { 
  "add-circle": {
    id: `add-circle`,
    class: [
      `svg-symbol`,
      `svg-symbol--add-circle`,
    ],
    preserveAspectRatio: ``,
    width: {size: 24, unit: `px`},
    height: {size: 24, unit: `px`},
    'viewBox': `0 0 24 24`,
    content: `<path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>`,
  },
  "remove-circle": {
    id: `remove-circle`,
    class: [
      `svg-symbol`,
      `svg-symbol--remove-circle`,
    ],
    preserveAspectRatio: ``,
    width: {size: 24, unit: `px`},
    height: {size: 24, unit: `px`},
    'viewBox': `0 0 24 24`,
    content: `<path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>`,
  },
  "access-time": {
    id: `access-time`,
    class: [
      `svg-symbol`,
      `svg-symbol--access-time`,
    ],
    preserveAspectRatio: ``,
    width: {size: 24, unit: `px`},
    height: {size: 24, unit: `px`},
    'viewBox': `0 0 24 24`,
    content: `<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>`,
  },
  "ballot": {
    id: `ballot`,
    class: [
      `svg-symbol`,
      `svg-symbol--ballot`,
    ],
    preserveAspectRatio: ``,
    width: {size: 24, unit: `px`},
    height: {size: 24, unit: `px`},
    'viewBox': `0 0 24 24`,
    content: `<path d="M13 7.5h5v2h-5zM13 14.5h5v2h-5z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M11 6H6v5h5V6zm-1 4H7V7h3v3zM11 13H6v5h5v-5zm-1 4H7v-3h3v3z"/>`,
  },
  "info": {
    id: `info`,
    class: [
      `svg-symbol`,
      `svg-symbol--info`,
    ],
    preserveAspectRatio: ``,
    width: {size: 24, unit: `px`},
    height: {size: 24, unit: `px`},
    'viewBox': `0 0 24 24`,
    content: `<path d="M11 7h2v2h-2zM11 11h2v6h-2z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>`,
  },
  "insert-invitation": {
    id: `insert-invitation`,
    class: [
      `svg-symbol`,
      `svg-symbol--insert-invitation`,
    ],
    preserveAspectRatio: ``,
    width: {size: 24, unit: `px`},
    height: {size: 24, unit: `px`},
    'viewBox': `0 0 24 24`,
    content: `<path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2z"/><path d="M17 12h-5v5h5v-5z"/>`,
  },
  "restore": {
    id: `restore`,
    class: [
      `svg-symbol`,
      `svg-symbol--restore`,
    ],
    preserveAspectRatio: ``,
    width: {size: 24, unit: `px`},
    height: {size: 24, unit: `px`},
    'viewBox': `0 0 24 24`,
    content: `<path d="M13 3a9 9 0 0 0-9 9H1l4 3.99L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18z"/><path d="M12 8v5l4.25 2.52.77-1.28-3.52-2.09V8z"/>`,
  },
  "web": {
    id: `web`,
    class: [
      `svg-symbol`,
      `svg-symbol--web`,
    ],
    preserveAspectRatio: ``,
    width: {size: 24, unit: `px`},
    height: {size: 24, unit: `px`},
    'viewBox': `0 0 24 24`,
    content: `<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 9h10.5v3.5H4V9zm0 5.5h10.5V18H4v-3.5zM20 18h-3.5V9H20v9z"/>`,
  },
  "thaime-qrcode": {
    id: `thaime-qrcode`,
    class: [
      `svg-symbol`,
      `svg-symbol--thaime-qrcode`,
    ],
    preserveAspectRatio: ``,
    width: {size: 232, unit: `px`},
    height: {size: 232, unit: `px`},
    'viewBox': `0 0 232 232`,
    content: `<path d="M56 232H0v-56h56v56zm88 0h-8v-8h8v8zm-16-40h16v8h-8v16h-8v16h-16v-8h8v-8h-8v8h-8v8h-8v-16h8v-8h-8v-8h24v-8h-8v-8h8v-8h8v16zm88 8h16v8h-8v16h-8v-8h-8v8h8v8h-48v-8h-8v8h-8v-8h8v-8h16v-8h24v-8h8v-8h8v8zM72 176h8v8h8v-8h16v8h-8v16H80v32H64v-40h8v-8h-8v-16h8v8zm120 40h-16v8h16v-8zM8 184v40h40v-40H8zm32 32H16v-24h24v24zm192-40h-16v8h-16v16h-24v8h-32v-8h16v-16h-24v-8h16v-8h8v-8h40v8h8v-8h8v-8h8v8h8v16zm-104 24h-8v8h8v-8zm40-32v24h24v-24h-24zm56 24h-8v-8h8v8zm-40-8h-8v-8h8v8zm-96-8h-8v-8h8v8zm32-32h8v16h16v8h-8v8h-8v-8h-16v-8h8v-8h-8v8h-8v8h-8v-16h8v-8h-8v-8h24v8zm-64 24H40v-8h16v8zm-48 0H0v-40h8v40zm16 0h-8v-16h8v16zm16-8h-8v-16h-8v-8h16v24zm48-56h-8v8h24v8h-8v16h-8v24H72v-8h8v-16H48v-8h32v-8h-8v-16h-8v16H40v-8h16v-8h8v-8h24v8zm128 48h-8v-16h-8v-8h16v24zm-144 0H48v-8h24v8zm104-16h24v16h-8v-8h-8v8h-8v-8h-24v8h-8v-16h24v-8h8v8zm56 8h-8v-8h8v8zm-88-8h-8v-8h8v8zm80-8h-8v-8h8v8zm-88 0h-8v-8h8v-8h8v-8h16v8h-8v16h-8v-8h-8v8zm-16 0h-8v-8h8v8zm80-16h16v8h-16v8h-8v-8h-8v-8h-16v8h-8v-8h8v-8h32v8zM40 72h8v8H32v-8H8v16h24v8H16v8h8v8h-8v16H8v-16H0V64h40v8zm-8 48h8v8H24v-16h8v8zm96 0h-8v-8h8v8zm8-8h-8v-8h8v8zm96 0h-8v-8h8v8zm-192-8h-8v-8h8v8zm80-24h8v-8h8v16h-24v8h-8v8h-8V88h8v-8h-8v-8h24v8zm8 24h-16v-8h16v8zm16 0h-8v-8h8v8zm32-32h8v-8h8v8h8v16h-24v-8h-8v24h-8V80h8V64h8v8zM56 104h-8v-8h8v8zm152-8h8v8h-16V88h8v8zm16 0h-8v-8h8v8zM104 56h-8v-8h-8v8h8v16h-8v-8h-8v8H64v16H48v-8h8v-8h-8v-8h24v-8h8v-8h8v-8h16v16zM88 88h-8V72h8v16zm56-16h-8v-8h8V48h-8v16h-8V48h-8v16h-8V48h8v-8h8v-8h8v8h16v16h8v-8h8v16h-8v16h-16v-8h8v-8h-8v8zm88 8h-8v-8h8v8zm-8-8h-8v-8h8v8zm-16 0h-8v-8h8v8zM88 32h-8v16h-8v8h-8V40h8v-8h-8v-8h24v8zm144 24h-56V0h56v56zM56 56H0V0h56v56zM184 8v40h40V8h-40zM8 8v40h40V8H8zm160 32h-16v-8h16v8zm48 0h-24V16h24v24zM40 40H16V16h24v24zm72-32h8V0h8v8h8v16h-16v-8h-8v8h-8v8h-8V16h8V8h-8V0h16v8zm32 24h-8v-8h8v8zm-24 0h-8v-8h8v8zm48-8h-16v-8h16v8zm0-16h-16v8h-8V8h-8V0h32v8zm-96 8h-8V8h8v8zm16 0h-8V0h8v16z"/>`,
  },
  "c-github": {
    id: `c-github`,
    class: [
      `svg-symbol`,
      `svg-symbol--c-github`,
    ],
    preserveAspectRatio: ``,
    width: {size: 22, unit: `px`},
    height: {size: 22, unit: `px`},
    'viewBox': `0 0 22 22`,
    content: `<path d="M0 11c0 4.86 3.151 8.983 7.523 10.437.55.101.75-.239.75-.529 0-.262-.01-1.129-.015-2.047-3.059.664-3.705-1.298-3.705-1.298-.501-1.27-1.222-1.608-1.222-1.608-1-.682.076-.669.076-.669 1.105.077 1.686 1.133 1.686 1.133.982 1.682 2.576 1.196 3.201.914.1-.71.385-1.196.699-1.47-2.442-.277-5.011-1.221-5.011-5.436 0-1.202.429-2.182 1.131-2.952-.112-.28-.49-1.399.109-2.913 0 0 .923-.295 3.025 1.128A10.492 10.492 0 0 1 11 5.32a10.5 10.5 0 0 1 2.754.371c2.099-1.424 3.023-1.128 3.023-1.128.601 1.516.223 2.634.11 2.912.705.77 1.13 1.75 1.13 2.952 0 4.225-2.572 5.156-5.023 5.428.396.342.747 1.01.747 2.036 0 1.47-.015 2.656-.015 3.019 0 .292.2.635.757.527C18.851 19.98 22 15.858 22 11c0-6.075-4.925-11-11-11S0 4.925 0 11z"/>`,
  },
  "c-medium": {
    id: `c-medium`,
    class: [
      `svg-symbol`,
      `svg-symbol--c-medium`,
    ],
    preserveAspectRatio: ``,
    width: {size: 24, unit: `px`},
    height: {size: 24, unit: `px`},
    'viewBox': `0 0 24 24`,
    content: `<path d="M24 0v24H0V0h24zm-4.092 18.215v-.271l-1.257-1.234a.375.375 0 0 1-.143-.361V7.282a.377.377 0 0 1 .143-.362l1.287-1.234v-.271h-4.456l-3.176 7.924-3.613-7.924H4.019v.271L5.524 7.5a.624.624 0 0 1 .203.527v7.126a.82.82 0 0 1-.218.707l-1.694 2.054v.271h4.803v-.271L6.924 15.86a.85.85 0 0 1-.233-.707V8.99l4.215 9.195h.489l3.621-9.195v7.329c0 .196 0 .233-.128.361l-1.302 1.264v.271h6.322z"/>`,
  },
  "c-thailpha": {
    id: `c-thailpha`,
    class: [
      `svg-symbol`,
      `svg-symbol--c-thailpha`,
    ],
    preserveAspectRatio: ``,
    width: {size: 100, unit: `px`},
    height: {size: 100, unit: `px`},
    'viewBox': `0 0 100 100`,
    content: `<path d="M100 17.544C100 7.861 92.139 0 82.456 0H17.544C7.861 0 0 7.861 0 17.544v64.912C0 92.139 7.861 100 17.544 100h64.912C92.139 100 100 92.139 100 82.456V17.544z" fill="#54009d"/><path d="M30.363 52.927c2.276 0 3.415-1.138 3.415-3.415s-1.139-3.415-3.415-3.415c-2.277 0-3.416 1.138-3.416 3.415s1.139 3.415 3.416 3.415zm55.496-2.805c-1.626.894-3.293 1.341-5.001 1.341-2.683 0-5.041-1.016-7.074-3.049-.488 3.903-1.626 6.139-3.415 6.709-.732 0-1.545-1.342-2.44-4.025-1.138-3.416-1.992-5.408-2.561-5.977 0 7.481-1.098 11.221-3.293 11.221-.488 0-1.179-1.463-2.074-4.391-.975-3.252-1.829-5.326-2.561-6.22-.488 7.969-2.033 11.953-4.635 11.953-.488 0-1.179-1.586-2.073-4.757-1.139-4.066-1.993-6.464-2.562-7.196 0 15.531-6.058 23.296-18.173 23.296-5.042 0-9.026-1.748-11.953-5.245-2.928-3.496-4.391-8.212-4.391-14.148 0-6.099 1.26-10.815 3.781-14.149 2.52-3.334 6.058-5 10.611-5 3.659 0 6.546 1.118 8.66 3.354 2.114 2.236 3.171 5.305 3.171 9.208 0 3.497-.691 6.424-2.073 8.782-1.708 2.928-4.188 4.391-7.44 4.391-1.789 0-3.334-.671-4.635-2.012-1.301-1.342-1.952-2.907-1.952-4.696 0-1.87.63-3.456 1.891-4.757 1.26-1.301 2.825-1.951 4.696-1.951 2.114 0 3.862.813 5.244 2.439v-.244l.244-2.927c.407-5.204-2.073-7.806-7.44-7.806-3.334 0-5.895 1.423-7.684 4.269-1.789 2.846-2.683 6.749-2.683 11.709 0 4.472 1.118 8.05 3.354 10.733 2.236 2.683 5.102 4.025 8.599 4.025 4.797 0 8.477-1.748 11.038-5.245 2.561-3.496 3.842-8.456 3.842-14.88 0-2.521-.122-4.431-.366-5.733 4.554.895 7.603 5.205 9.148 12.929.732-2.358 1.098-4.635 1.098-6.83 0-1.545-.326-3.497-.976-5.855 3.415.976 6.383 4.513 8.904 10.612.406-2.033.61-3.537.61-4.513 0-.732-.204-2.236-.61-4.513 3.496.976 6.098 4.391 7.806 10.246.813-1.058 1.219-2.481 1.219-4.269 0-.976-.122-2.074-.365-3.294.406.082 2.154 1.22 5.244 3.416 2.765 2.032 5.652 3.049 8.66 3.049h.61z" fill="#fff" fill-rule="nonzero"/>`,
  },
  "c-twitter": {
    id: `c-twitter`,
    class: [
      `svg-symbol`,
      `svg-symbol--c-twitter`,
    ],
    preserveAspectRatio: ``,
    width: {size: 25, unit: `px`},
    height: {size: 25, unit: `px`},
    'viewBox': `0 0 25 25`,
    content: `<path d="M24 5.213a9.433 9.433 0 0 1-2.71.743 4.732 4.732 0 0 0 2.075-2.611 9.446 9.446 0 0 1-2.997 1.145 4.719 4.719 0 0 0-8.04 4.304A13.396 13.396 0 0 1 2.6 3.864a4.696 4.696 0 0 0-.639 2.372c0 1.637.833 3.081 2.1 3.927a4.7 4.7 0 0 1-2.138-.59v.06a4.722 4.722 0 0 0 3.785 4.627 4.724 4.724 0 0 1-2.131.08 4.723 4.723 0 0 0 4.408 3.277 9.467 9.467 0 0 1-5.86 2.02c-.381 0-.757-.022-1.126-.066a13.356 13.356 0 0 0 7.233 2.12c8.68 0 13.426-7.19 13.426-13.425 0-.205-.004-.408-.014-.61A9.587 9.587 0 0 0 24 5.212z"/>`,
  },
}
const SVG_ATTRS = {
  "xmlns": false
}

export default {
  name: `svg-icon`,
  props: {
    name: {
      type: String,
      required: true,
    },
    scale: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    attrs() {
      if (!SVG_LIB[this.name]) return {} 
      const width = this.icon.width.size * this.scale + this.icon.width.unit
      const height = this.icon.height.size * this.scale + this.icon.height.unit 
      return Object.assign({
        viewBox: this.icon.viewBox,
        preserveAspectRatio: this.icon.preserveAspectRatio ? this.icon.preserveAspectRatio : false,
        width,
        height,
      }, SVG_ATTRS)
    },
    icon() {
      if (!SVG_LIB[this.name]) return {}
      return SVG_LIB[this.name]
    }
  },
  render(createElement) {
    if (!SVG_LIB[this.name]) return null
    return createElement(
      `svg`,
      {
        class: this.icon.class,
        attrs: this.attrs,
        domProps: {
          innerHTML: this.icon.content
        },
      }
    )
  },
}
</script>