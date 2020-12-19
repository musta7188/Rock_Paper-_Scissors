import {render, fireEvent} from '../../test-utils'
import RulesButton from '../RulesButton'

const setRulesFunctionMock = jest.fn();

describe("RulesButton", () =>{

  it('it render the rules panel when state is true', () =>{
    const {container} =render(<RulesButton state={true} setRulesFunction={setRulesFunctionMock} />)
    expect(container.firstChild).toHaveClass('rules')
  })

  it("it set the opposite boolean value when setRulesFunction is called", () =>{
    const {container} =render(<RulesButton state={true} setRulesFunction={setRulesFunctionMock} />);
    fireEvent.click(container.getElementsByTagName('button')[0]);
    expect(setRulesFunctionMock).toBeCalledTimes(1);
    expect(setRulesFunctionMock).toHaveBeenCalledWith(false)
  })


})

