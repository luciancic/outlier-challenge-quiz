import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect'

Enzyme.configure({ adapter: new Adapter() })
