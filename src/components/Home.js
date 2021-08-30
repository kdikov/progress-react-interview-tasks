import React from 'react'
import { withRouter } from 'react-router-dom'

const Home = () => {
    return (
        <React.Fragment>
            <h1>TICKETS</h1>
            <div className="ticket">
                <h2>Ticket #1</h2>
                <h3>Question:</h3>
                <div className="question">Hi All<br></br>
                    I am trying to disable the default keyboard inputs of up/down in the NumericTextBox. I cannot see any
                    options from the api</div>
                <div className="answer">      <div>
                    <h3>Answer:</h3>
                    <p>Hello,</p>
                    <p>Thank you for contacting us.</p>
                    <p>The arrow keys functionality is added for accessibility purposes, but if you want to disable them, you can use "<strong>ref</strong>" of the <strong>NumericTextBox</strong> and attach event listener to the "<strong>keydown</strong>" event and stop its propagation:</p>
                    <div>
                        <div style={{ paddingLeft: '40px' }}>import&nbsp;React&nbsp;from&nbsp;'react';</div>
                        <div style={{ paddingLeft: '40px' }}>import&nbsp;ReactDOM&nbsp;from&nbsp;'react-dom';</div>
                        <br />
                        <div style={{ paddingLeft: '40px' }}>import&nbsp;{'{'}&nbsp;NumericTextBox&nbsp;{'}'}&nbsp;from&nbsp;'@progress/kendo-react-inputs';</div>
                        <div style={{ paddingLeft: '40px' }}>import&nbsp;'@progress/kendo-react-intl';</div>
                        <br />
                        <div style={{ paddingLeft: '40px' }}>class&nbsp;App&nbsp;extends&nbsp;React.Component&nbsp;{'{'}</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;handleKeyDown&nbsp;=&nbsp;e&nbsp;=&gt;&nbsp;{'{'}</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(e.code&nbsp;==&nbsp;'ArrowUp'&nbsp;||&nbsp;e.code&nbsp;==&nbsp;'ArrowDown')&nbsp;{'{'}</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.preventDefault();</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.stopPropagation();</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;{'}'};</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;render()&nbsp;{'{'}</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;(</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;NumericTextBox</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ref={'{'}el&nbsp;=&gt;</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;el.element.addEventListener('keydown',&nbsp;this.handleKeyDown)</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;);</div>
                        <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;{'}'}</div>
                        <div style={{ paddingLeft: '40px' }}>{'}'}</div>
                        <br />
                        <div style={{ paddingLeft: '40px' }}>ReactDOM.render(&lt;App&nbsp;/&gt;,&nbsp;document.querySelector('my-app'));</div>
                    </div>
                    <div>&nbsp;</div>
                    <div>You can also see the above in action in the link below:&nbsp;</div>
                    <div><a href="https://stackblitz.com/edit/react-gz7gfv-plrwgx?file=app%2Fmain.jsx&fbclid=IwAR008AI612IKzJu-NjGOaBijjlsQvydB9GA1n0cfZnZpAWGXk3SpOsq8uNE" target="_blank">https://stackblitz.com/edit/react-gz7gfv-plrwgx?file=app%2Fmain.jsx&amp;fbclid=IwAR008AI612IKzJu-NjGOaBijjlsQvydB9GA1n0cfZnZpAWGXk3SpOsq8uNE</a></div>
                    <div>&nbsp;</div>
                    <div>Please let us know if further questions arise on this matter.</div>
                    <div>&nbsp;</div>
                    <div>Regards</div>
                </div></div>
            </div>

            <div className="ticket">
                <h2>Ticket #2</h2>
                <h3>Question:</h3>
                <div className="question"><p>Hello, KendoReact,<br />I have a KendoReact Grid and one of the columns has a very long text. I would like to show a tooltip over<br />this column to allow the user to read the full text.<br />Please provide links and example.</p></div>
                <div className="answer">      <div>
                    <h3>Answer:</h3>
                    <p>Hello,</p>
                    <p>The desired functionality could be achieved by setting the "<strong>cell</strong>" and "<strong>headerCell</strong>" properties of the Grid and adding "<strong>title</strong>" to the td element as shown in the following example:</p>
                    <ul>
                        <li><a href="https://www.telerik.com/kendo-react-ui/knowledge-base/tooltip-in-grid/">https://www.telerik.com/kendo-react-ui/knowledge-base/tooltip-in-grid/</a></li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>Another option, if you want to show only small portion of the text in the cell on a single line, you can render the text in a&nbsp;<strong>div&nbsp;</strong>element within the&nbsp;<strong>td&nbsp;</strong>and set its&nbsp;<strong>title&nbsp;</strong>instead:</p>
                    &lt;td&gt;</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>title={'{'}this.props.dataItem.ProductName{'}'}</strong></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style={'{'}{'{'}&nbsp;overflow:&nbsp;'hidden',&nbsp;whiteSpace:&nbsp;'nowrap'&nbsp;{'}'}{'}'}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}this.props.dataItem.ProductName{'}'}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;</div>
                    <div>&nbsp;</div>
                    <div>This approach could be checked in the link below:</div>
                    <ul>
                        <li><a href="https://stackblitz.com/edit/react-ppulvj?file=app/main.jsx">https://stackblitz.com/edit/react-ppulvj?file=app/main.jsx</a></li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>Hope this helps.</p>
                    <p>Regards</p>
                </div></div>

            <div className="ticket">
                <h2>Ticket #3</h2>
                <h3>Question:</h3>
                <div className="question">
                    <div>
                        Hello, Team,<br></br>
                        I need to export my Grid data to Excel, but I want each value larger than 20 to be in green and the other
                        numbers to be in blue.
                        I have spent 3 hours searching in your documentation, this is a very common use case, you should have
                        examples for this.
                    </div>
                </div>
                <div className="answer">
                    <h3>Answer:</h3>
                    <p>Hello,</p>
                    <p>For customizing the exported file you can manipulate the woorbook and pass the changed worbook to the "save" method of the ExcelExport. Following is a link to our help article for customizing the workbook:</p>
                    <ul>
                        <li><a href="https://www.telerik.com/kendo-react-ui/components/excelexport/customization/">https://www.telerik.com/kendo-react-ui/components/excelexport/customization/</a></li>
                    </ul>
                
                <p>&nbsp;</p>
                <p>In the following example I have integrated the above approach in the context of the Grid excel export:</p>
                <ul>
                    <li><a href="https://stackblitz.com/edit/react-dpjhwu?file=app/main.jsx">https://stackblitz.com/edit/react-dpjhwu?file=app/main.jsx</a></li>
                </ul>
                <p>&nbsp;</p>
                <p>As you will notice, we are traversing each row of the workbook and we are conditionally changing the background of the Price cell (index 2):</p>
                <div>
                    <div style={{ paddingLeft: '40px' }}>const&nbsp;App&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;{'{'}</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;const&nbsp;_export&nbsp;=&nbsp;React.useRef(null);</div>
                    <br />
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;const&nbsp;excelExport&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;{'{'}</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(_export.current&nbsp;!==&nbsp;null)&nbsp;{'{'}</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;options&nbsp;=&nbsp;_export.current.workbookOptions();</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;rows&nbsp;=&nbsp;options.sheets[0].rows;</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rows.forEach(row&nbsp;=&gt;&nbsp;{'{'}</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(row.type&nbsp;===&nbsp;'data')&nbsp;{'{'}</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//we&nbsp;are&nbsp;checking&nbsp;the&nbsp;"Price"&nbsp;column&nbsp;-&nbsp;index&nbsp;2</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(row.cells[2].value&nbsp;&gt;&nbsp;20)&nbsp;{'{'}&nbsp;</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;row.cells[2].background&nbsp;=&nbsp;'#00ff00';</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}&nbsp;else&nbsp;{'{'}</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;row.cells[2].background&nbsp;=&nbsp;'#0066ff';</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'});</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_export.current.save(options);</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;&nbsp;{'}'};</div>
                    <div style={{ paddingLeft: '40px' }}>&nbsp;</div>
                </div>
                <p>Hope this helps.</p>
                <p>Regards</p>
            </div></div>
        </React.Fragment>
    )
}

export default withRouter(Home)


