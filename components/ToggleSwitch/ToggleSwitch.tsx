import React from "react"

/*
Toggle Switch Component
Note: id, checked and onChange are required for ToggleSwitch component to function. The props name, small, disabled
and optionLabels are optional.
Usage: <ToggleSwitch id="id" checked={value} onChange={checked => setValue(checked)}} />
*/

interface ToggleSwitchProps {
  id?: string
  name?: string
  checked: boolean
  onChange?: React.SetStateAction<any>
  small?: boolean
  disabled?: boolean
  optionLabels?: any
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.keyCode !== 32) return

    e.preventDefault()
    onChange(!checked)
  }
  return (
    <div className={"toggle-switch" + (small ? " small-switch" : "")}>
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      {id ? (
        <label
          className="toggle-switch-label"
          tabIndex={disabled ? -1 : 1}
          onKeyDown={(e) => handleKeyPress(e)}
          htmlFor={id}
        >
          <span
            className={
              disabled
                ? "toggle-switch-inner toggle-switch-disabled"
                : "toggle-switch-inner"
            }
            data-yes={optionLabels[0]}
            data-no={optionLabels[1]}
            tabIndex={-1}
          />
          <span
            className={
              disabled
                ? "toggle-switch-switch toggle-switch-disabled"
                : "toggle-switch-switch"
            }
            tabIndex={-1}
          />
        </label>
      ) : null}
    </div>
  )
}

ToggleSwitch.defaultProps = {
  optionLabels: ["Dark", "Light"],
}

export default ToggleSwitch
