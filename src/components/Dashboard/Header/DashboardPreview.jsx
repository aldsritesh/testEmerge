import React from "react";
// import '../../assets/styles/grid.css';
import _, { before } from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useState } from "react";
import { useEffect } from "react";
import ChartGrid from "../GridComponent/ChartGrid";
import Numbers from "../GridComponent/Numbers";
import Emailreport from "../GridComponent/Emailreport";
import Simpledata from "../GridComponent/Simpledata";
import Calender from "../GridComponent/Calender";
import { useDispatch, useSelector } from "react-redux";
import { useReducer } from "react";
import Gantt from "../GridComponent/Gantt";
import { useRouter } from "next/router";
import { dashboardData } from "./dashboardData";
import DealsRevenueForecast from "../GridComponent/DealsRevenueForeCast";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

function DashboardPreview({ SetBoxId }) {
  const defaultProps = {
    className: "layout",
    rowHeight: 55,
    onLayoutChange: function () { },
    cols: { lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 },
  };
  const dispatch = useDispatch();

  const [compactType, setCompactType] = useState('vertical');
  const [mounted, setMounted] = useState(false);
  
  const selectedIndex = useSelector(state => state.WidthObj.currentIndex);
  const breakpoint = useSelector(state => state.WidthObj.currentBreakpoint);
  const comps = dashboardData;
  const {previewing, save} = useSelector(state => state.WidthObj);

  const router = useRouter()



  useEffect(() => {
    setMounted(true);
    const prevewing =true;
    const save = true;
    dispatch({type: 'PREVIEW_CHANGED', payload: prevewing });
    dispatch({type: 'SAVE_CHANGED', payload: save});
    if(prevewing || save){
      const comps = JSON.parse(localStorage.getItem('components'));
      dispatch({type: 'COMPONENT_CHANGED', payload: []});
      setTimeout(() => {
        dispatch({type: 'COMPONENT_CHANGED', payload: comps});
      }, 0)
    }
  }, [])

  const setComps = payload => {
    dispatch({type: 'COMPONENT_CHANGED', payload: []});
    setTimeout(() => {
      dispatch({type: 'COMPONENT_CHANGED', payload});
    }, 0);
  }



  // onLayoutChange = (layout, layouts) => {
  //   this.props.onLayoutChange(layout, layouts);
  // };


  const _onDrop = (layout, layoutItem, _event) => {
    if(previewing || save) return;
    const tempComps = _.cloneDeep(comps);
    const itemType = _event.dataTransfer.getData('text/plain');
    console.log(layoutItem);
    layout.map(o => {
      if (o.i !== '__dropping-elem__') {
        const { x, y, h, w } = o;
        tempComps[o.i].origin = { x, y, h, w };
      }
      else if(breakpoint === 'lg'){
        const { x, y } = o;
        const origin = { x, y };
        if (itemType === 'numbers') {
          origin.h = 2;
          origin.w = 3; 
        }
        if (itemType === 'chart') {
          origin.h = 8;
          origin.w = 6;
        }
        if (itemType === 'simpledata') {
          origin.h = 8;
          origin.w = 6;
        }
        if (itemType === 'calender') {
          origin.h = 8;
          origin.w = 6;
        }
        if (itemType === 'chat') {
          origin.h = 5;
          origin.w = 6;
        }
        if (itemType === 'email') {
          origin.h = 8;
          origin.w = 6;
        }
        if(itemType === 'gantt'){
          origin.h = 8;
          origin.w = 6;
        }
        tempComps[layout.length - 1] = {
          origin, component: itemType
        }
      }
      else if(breakpoint === 'md'){
        const { x, y } = o;
        const origin = { x, y };
        if (itemType === 'numbers') {
          origin.h = 2;
          origin.minH = 2;
          origin.maxH = 2;
          origin.w = 3; 
        }
        if (itemType === 'chart') {
          origin.h = 6;
          origin.w = 6;
        }
        if (itemType === 'calender') {
          origin.h = 6;
          origin.w = 6;
        }
        if (itemType === 'simpledata') {
          origin.h = 6;
          origin.w = 6;
        }
        if (itemType === 'chat') {
          origin.h = 8;
          origin.w = 4;
        }
        if (itemType === 'email') {
          origin.h = 6;
          origin.w = 6;
        }
        if(itemType === 'gantt'){
          origin.h = 6;
          origin.w = 6;
        }
        tempComps[layout.length - 1] = {
          origin, component: itemType
        }
      }
      else if(breakpoint === 'sm'){
        const { x, y } = o;
        const origin = { x, y };
        if (itemType === 'numbers') {
          origin.h = 2;
          origin.w = 3; 
        }
        if (itemType === 'chart') {
          origin.h = 6;
          origin.w = 6;
        }
        if (itemType === 'calender') {
          origin.h = 6;
          origin.w = 6;
        }
        if (itemType === 'chat') {
          origin.h = 8;
          origin.w = 4;
        }
        if (itemType === 'email') {
          origin.h = 6;
          origin.w = 6;
        }
        if(itemType === 'simpledata'){
          origin.h = 6;
          origin.w = 6;
        }
        if(itemType === 'gantt'){
          origin.h = 6;
          origin.w = 6;
        }
        tempComps[layout.length - 1] = {
          origin, component: itemType
        }
      }
      else if(breakpoint === 'xs'){
        const { x, y } = o;
        const origin = { x, y };
        if (itemType === 'numbers') {
          origin.h = 2;
          origin.w = 3; 
        }
        if (itemType === 'chart') {
          origin.h = 5;
          origin.w = 6;
        }
        if (itemType === 'calender') {
          origin.h = 5;
          origin.w = 6;
        }
        if (itemType === 'simpledata') {
          origin.h = 5;
          origin.w = 6;
        }
        if (itemType === 'chat') {
          origin.h = 8;
          origin.w = 4;
        }
        if (itemType === 'email') {
          origin.h = 5;
          origin.w = 6;
        }
        if(itemType === 'gantt'){
          origin.h = 5;
          origin.w = 6;
        }
        tempComps[layout.length - 1] = {
          origin, component: itemType
        }
      }
    })
    setComps([...tempComps]);
  };

  const _makeSmall = params => {
    const tempComps = [...comps];
    if(!tempComps[params]) return;
    tempComps[params].origin.w = 3;
    // adjust height based on breakpoint
    if(breakpoint === 'lg'){
      if(tempComps[params].component === 'chat')
        tempComps[params].origin.h = 9;
      if(tempComps[params].component === 'chart')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'email')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'gantt')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'simpledata')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'calender')
        tempComps[params].origin.h = 5;
    }
    else if(breakpoint === 'md'){
      if(tempComps[params].component === 'chat')
        tempComps[params].origin.h = 9;
      if(tempComps[params].component === 'chart')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'email')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'gantt')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'simpledata')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'calender')
        tempComps[params].origin.h = 5;
    }
    else if(breakpoint === 'sm'){
      if(tempComps[params].component === 'chat')
        tempComps[params].origin.h = 9;
      if(tempComps[params].component === 'chart')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'email')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'gantt')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'simpledata')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'calender')
        tempComps[params].origin.h = 5;
    }
    else if(breakpoint === 'xs'){
      if(tempComps[params].component === 'chat')
        tempComps[params].origin.h = 9;
      if(tempComps[params].component === 'chart')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'email')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'gantt')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'simpledata')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'calender')
        tempComps[params].origin.h = 5;
    }
    
    setComps(tempComps);
  }
  const _makeMedium = params => {
    const tempComps = [...comps];
    if(!tempComps[params]) return;
    tempComps[params].origin.w = 6;
    if(breakpoint === 'lg'){
      if(tempComps[params].component === 'chat')
        tempComps[params].origin.h = 5
      if(tempComps[params].component === 'chart')
        tempComps[params].origin.h = 8;
      if(tempComps[params].component === 'email')
        tempComps[params].origin.h = 8;
      if(tempComps[params].component === 'gantt')
        tempComps[params].origin.h = 8
      if(tempComps[params].component === 'simpledata')
        tempComps[params].origin.h = 8;
      if(tempComps[params].component === 'calender')
        tempComps[params].origin.h = 8;
    }
    else if(breakpoint === 'md'){
      if(tempComps[params].component === 'chat'){
        tempComps[params].origin.h = 8;
        tempComps[params].origin.w = 4;
      }
      if(tempComps[params].component === 'chart')
        tempComps[params].origin.h = 6;
      if(tempComps[params].component === 'email')
        tempComps[params].origin.h = 6;
      if(tempComps[params].component === 'gantt')
        tempComps[params].origin.h = 6;
      if(tempComps[params].component === 'simpledata')
        tempComps[params].origin.h = 6;
      if(tempComps[params].component === 'calender')
        tempComps[params].origin.h = 6;
    }
    else if(breakpoint === 'sm'){
      if(tempComps[params].component === 'chat'){
        tempComps[params].origin.h = 8;
        tempComps[params].origin.w = 4;
      }
      if(tempComps[params].component === 'chart')
        tempComps[params].origin.h = 6;
      if(tempComps[params].component === 'email')
        tempComps[params].origin.h = 6;
      if(tempComps[params].component === 'gantt')
        tempComps[params].origin.h = 6;
      if(tempComps[params].component === 'simpledata')
        tempComps[params].origin.h = 6;
      if(tempComps[params].component === 'calender')
        tempComps[params].origin.h = 6;
    }
    else if(breakpoint === 'xs'){
      if(tempComps[params].component === 'chat'){
        tempComps[params].origin.h = 8;
        tempComps[params].origin.w = 4;
      }
      if(tempComps[params].component === 'chart')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'email')
        tempComps[params].origin.h = 4;
      if(tempComps[params].component === 'gantt')
        tempComps[params].origin.h = 4;
      if(tempComps[params].component === 'simpledata')
        tempComps[params].origin.h = 4;
      if(tempComps[params].component === 'calender')
        tempComps[params].origin.h = 4;
    }
    setComps(tempComps);
  }
  const _makeLarge = params => {
    const tempComps = [...comps];
    if(!tempComps[params]) return;
    tempComps[params].origin.w = 12;
    if(breakpoint === 'lg'){
      if(tempComps[params].component === 'chat')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'chart')
        tempComps[params].origin.h = 14;
      if(tempComps[params].component === 'email')
        tempComps[params].origin.h = 14;
      if(tempComps[params].component === 'gantt'){
        tempComps[params].origin.h = 14;
      if(tempComps[params].component === 'simpledata')
        tempComps[params].origin.h = 7;
      if(tempComps[params].component === 'calender')
        tempComps[params].origin.h = 7;
      }
    }
    else if(breakpoint === 'md'){
      if(tempComps[params].component === 'chat')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'chart')
        tempComps[params].origin.h = 10;
      if(tempComps[params].component === 'email')
        tempComps[params].origin.h = 10;
      if(tempComps[params].component === 'gantt')
        tempComps[params].origin.h = 10;
      if(tempComps[params].component === 'simpledata')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'calender')
        tempComps[params].origin.h = 5;
    }
    else if(breakpoint === 'sm'){
      if(tempComps[params].component === 'chat')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'chart')
        tempComps[params].origin.h = 10;
      if(tempComps[params].component === 'email')
        tempComps[params].origin.h = 10;
      if(tempComps[params].component === 'gantt')
        tempComps[params].origin.h = 10;
      if(tempComps[params].component === 'simpledata')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'calender')
        tempComps[params].origin.h = 5;
    }
    else if(breakpoint === 'xs'){
      if(tempComps[params].component === 'chat')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'chart')
        tempComps[params].origin.h = 8;
      if(tempComps[params].component === 'email')
        tempComps[params].origin.h = 8;
      if(tempComps[params].component === 'gantt')
        tempComps[params].origin.h = 8;
      if(tempComps[params].component === 'simpledata')
        tempComps[params].origin.h = 5;
      if(tempComps[params].component === 'calender')
        tempComps[params].origin.h = 5;
    }
    
    setComps(tempComps);
  }


  const _onDrag = (layout, layoutItem, _event) => {
    if(comps.length === 0) return;
    const tempComps = _.cloneDeep(comps);
    layout.map(l => {
      const {x, y} = l;
      tempComps[l.i].origin.x = x;
      tempComps[l.i].origin.y = y;
    });
    setComps(tempComps);
  }
  const _handleClick = (e, i) => {
    if(previewing || save) return;
    dispatch({type: 'CURRENT_SELECTED_INDEX', payload: i});
    if(comps[i].component !== 'box'){
      SetBoxId(e, i);
    }

  }
  const _onBreakpointChange = b => {
    dispatch({type: 'BREAKPOINT_CHANGED', payload: b});
    if(comps.length === 0 || b === breakpoint) return;
    const tempComps = comps.map((o, i) => {
      const itemType = comps[i].component;
      if(b === 'lg'){
        if (itemType === 'numbers') {
          o.origin.h = 2;
          o.origin.w = 3; 
        }
        if (itemType === 'chart') {
          o.origin.h = 8;
          o.origin.w = 6;
        }
        if (itemType === 'simpledata') {
          o.origin.h = 8;
          o.origin.w = 6;
        }
        if (itemType === 'calender') {
          o.origin.h = 8;
          o.origin.w = 6;
        }
        if (itemType === 'chat') {
          o.origin.h = 5;
          o.origin.w = 6;
        }
        if (itemType === 'email') {
          o.origin.h = 8;
          o.origin.w = 6;
        }
        if(itemType === 'gantt'){
          o.origin.h = 8;
          o.origin.w = 6;
        }
        return o;
      }
      else if(b === 'md'){
        if (itemType === 'numbers') {
          o.origin.h = 2;
          o.origin.w = 3; 
        }
        if (itemType === 'chart') {
          o.origin.h = 6;
          o.origin.w = 6;
        }
        if (itemType === 'calender') {
          o.origin.h = 6;
          o.origin.w = 6;
        }
        if (itemType === 'simpledata') {
          o.origin.h = 6;
          o.origin.w = 6;
        }
        if (itemType === 'chat') {
          o.origin.h = 8;
          o.origin.w = 4;
        }
        if (itemType === 'email') {
          o.origin.h = 6;
          o.origin.w = 6;
        }
        if(itemType === 'gantt'){
          o.origin.h = 6;
          o.origin.w = 6;
        }
        return o;
      }
      else if(b === 'sm'){
        if (itemType === 'numbers') {
          o.origin.h = 2;
          o.origin.w = 3; 
        }
        if (itemType === 'chart') {
          o.origin.h = 6;
          o.origin.w = 6;
        }
        if (itemType === 'calender') {
          o.origin.h = 6;
          o.origin.w = 6;
        }
        if (itemType === 'chat') {
          o.origin.h = 8;
          o.origin.w = 4;
        }
        if (itemType === 'email') {
          o.origin.h = 6;
          o.origin.w = 6;
        }
        if(itemType === 'simpledata'){
          o.origin.h = 6;
          o.origin.w = 6;
        }
        if(itemType === 'gantt'){
          o.origin.h = 6;
          o.origin.w = 6;
        }
        return o;
      }
      else if(b === 'xs'){
        if (itemType === 'numbers') {
          o.origin.h = 2;
          o.origin.w = 3; 
        }
        if (itemType === 'chart') {
          o.origin.h = 5;
          o.origin.w = 6;
        }
        if (itemType === 'calender') {
          o.origin.h = 5;
          o.origin.w = 6;
        }
        if (itemType === 'simpledata') {
          o.origin.h = 5;
          o.origin.w = 6;
        }
        if (itemType === 'chat') {
          o.origin.h = 8;
          o.origin.w = 4;
        }
        if (itemType === 'email') {
          o.origin.h = 5;
          o.origin.w = 6;
        }
        if(itemType === 'gantt'){
          o.origin.h = 5;
          o.origin.w = 6;
        }
        return o;
      }
    })
    setComps([...tempComps]);
  }
  return (
    <>
      <ResponsiveReactGridLayout
        {...defaultProps}
        onDrop={_onDrop}
        isResizable={false}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType={compactType}
        preventCollision={!compactType}
        isDroppable={!previewing && !save}
        onDragStop={_onDrag}
        onBreakpointChange={_onBreakpointChange}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      >
        {
          comps.map((c, i) => {
            return <div style={selectedIndex !== i && selectedIndex !== -1 ? {zIndex: -1, opacity: 0.5} : {}} key={i} onClick={e => _handleClick(e, i)} data-grid={{...c.origin, static: previewing || save}} className={selectedIndex === i ? 'border border-blue-500 rounded' : ''} >
              {c.component === 'numbers' ? <Numbers index={ i } size={c.origin.w} breakpoint={breakpoint} /> : null}
              {c.component === 'chart' ? <ChartGrid index={ i } /> : null}
              {c.component === 'simpledata' ? <Simpledata index={ i } /> : null}
              {c.component === 'calender' ? <Calender index={i}/> : null}
              {c.component === 'chat' ? <DealsRevenueForecast breakpoint={'md'} size={c.origin.w} index={ i } /> : null}
              {c.component === 'email' ? <Emailreport index={ i }/> : null}
              {c.component === 'gantt' ? <Gantt index={ i } /> : null}
              <div style={{zIndex: 9}} id={`di-${i}`} className={selectedIndex === i ? '' : "hidden"}>
                <div className="grid grid-cols-1 sm:grid-cols-3 w-56 rounded-md gap-4 mb-2 bg-white p-2 mt-2 ">
                  <div>
                    <div
                      className="relative"
                      >
                      <label className="flex cursor-pointer rounded-md border border-grey/20 bg-white justify-between items-start gap-4 text-center">
                        <div className="h-8 w-4/12 bg-grey/20 rounded-md"></div>
                        <input
                          onClick={() => _makeSmall(i)}
                          name="teamsize"
                          type="radio"
                          className="form-checkbox relative hidden z-10 peer"
                        />
                        <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                      </label>
                    </div>
                    <p className="text-sm mt-1">Small</p>
                  </div>
                  <div>
                    <div
                      className="relative"
                      >
                      <label className="flex cursor-pointer rounded-md border border-grey/20 bg-white justify-between items-start gap-4 text-center">
                        <div className="h-8 w-6/12 bg-grey/20 rounded-md"></div>
                        <input
                          onClick={() => _makeMedium(i)}
                          name="teamsize"
                          type="radio"
                          className="form-checkbox relative hidden z-10 peer"
                        />
                        <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                      </label>
                    </div>
                    <p className="text-sm mt-1">Medium</p>
                  </div>
                  <div>
                    <div
                      className="relative"
                      >
                      <label className="flex cursor-pointer rounded-md border border-grey/20 bg-white justify-between items-start gap-4 text-center">
                        <div className="h-8 w-full bg-grey/20 rounded-md"></div>
                        <input
                          onClick={() => _makeLarge(i)}
                          name="teamsize"
                          type="radio"
                          className="form-checkbox relative hidden z-10 peer"
                        />
                        <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                      </label>
                    </div>
                    <p className="text-sm mt-1">Large</p>
                  </div>
                </div>
              </div>
            </div>
          })
        }
      </ResponsiveReactGridLayout>
    </>
  );
}
export default DashboardPreview;