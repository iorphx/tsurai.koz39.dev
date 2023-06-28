import { Show } from 'solid-js';
import { FaSolidXmark, FaSolidCheck } from 'solid-icons/fa';
import { useStreamer } from 'hooks/useContext';
import classNames from 'utils/classNames';

export default function Toggle(props) {
  const [streamer, { modify }] = useStreamer();

  const onChangeHandler = evt => {
    const { checked } = evt.target;
    modify(props.name, checked);

    if (checked) {
      modify(`${props.name}_streamup`, true);
      modify(`${props.name}_streamdown`, true);
    } else {
      modify(`${props.name}_streamup`, false);
      modify(`${props.name}_streamdown`, false);
    }
  };

  return (
    <Show when={streamer()}>
      <label class="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" checked={streamer()[props.name]} class="peer sr-only" onChange={onChangeHandler} />
        <div class="peer h-6 w-11 rounded-full border-gray-600 bg-gray-700 peer-checked:bg-blue-600 peer-focus:outline-none" />
        <span class="absolute left-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 bg-white transition-all peer-checked:translate-x-full peer-checked:border-white">
          {streamer()[props.name] ? (
            <FaSolidCheck
              class={classNames(
                streamer()[props.name] ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                'h-3 w-3 fill-blue-600 transition-opacity',
              )}
            />
          ) : (
            <FaSolidXmark
              class={classNames(
                streamer()[props.name] ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                'h-3 w-3 fill-gray-500 transition-opacity',
              )}
            />
          )}
        </span>
        <Show when={props.label}>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{props.label}</span>
        </Show>
      </label>
    </Show>
  );
}
